require('dotenv').config();
const express=require('express');
const session=require('express-session');
const massive=require('massive');
const bodyParser=require('body-parser');
const aws=require('aws-sdk');
const axios=require('axios');
const path = require('path');
// const stripe = require('stripe')(STRIPE_KEY)

const ctrl=require('./controller.js');

const app=express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`))
// app.get('*',(req,res)=>{
//     res.sendfile(path.join(__dirname,'../build/index.html'))
// })

const {SERVER_PORT,REACT_APP_DOMAIN,REACT_APP_CLIENT_ID,CLIENT_SECRET,CONNECTION_STRING,SECRET,AUTH_PROTOCOL,REACT_APP_STRIPE_KEY,SECRET_STRIPE} = process.env

const stripe = require('stripe')(REACT_APP_STRIPE_KEY)


//middleware
massive(CONNECTION_STRING).then(db=>{
    app.set('db',db)
    console.log('db connected')
}).catch(err=>console.log(err))

app.use(session({
    secret:SECRET,
    resave:false,
    saveUninitialized:false
}))

let authBypass = async(req,res,next)=>{
    if(process.env.NODE_ENV){
        const db = req.app.get('db')
        let res = await db.session_user(1);
        req.session.user = res[0];
        next();
    } else{
        next();
    }
}
app.use(authBypass)

//endpoints
app.get(`/auth/callback`,async(req,res)=>{
    //get code from req.query.code
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `${AUTH_PROTOCOL}://${req.headers.host}/auth/callback`
      }
      // post request with code for token
      let tokenRes = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload);
      // use token to get user data
      let userRes = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${tokenRes.data.access_token}`)

      console.log(userRes)
      let {email,picture,sub,name} = userRes.data
      //check if user already exists in our db
      const db = app.get(`db`)
      let foundCustomer = await db.find_customer([sub])
      console.log('test')
      if(foundCustomer[0]){
          //found user existing in the db, put returned user on session
          req.session.user = foundCustomer[0];
      } else {
          //no user was found by that google id. create new user in db
          let createdCust = await db.create_customers([name,sub,picture,email])
          req.session.user = createdCust[0];
      }
      res.redirect(`/#/`)
})

//  login/logout
app.get(`/api/user-data`,ctrl.login)

app.get('/auth/logout',ctrl.logout)

//departments
app.get('/api/departments/:id',ctrl.getDepartment)
app.get('/api/departments',ctrl.getAllDepartments)
app.get('/api/merchandise/:departmentId',ctrl.displayDepartment)

//items
app.get('/api/items/:id',ctrl.displayItem)

//shopping_cart
app.get('/api/cart',ctrl.displayCart)
app.post('/api/cart/:id/:quantity',ctrl.addToCart)
app.delete('/api/cart/:itemId',ctrl.removeFromCart)

//stripe
app.post('/api/charge',async(req,res)=>{
    const {token} = req.body;

    try{
        const stripe = require('stripe')(SECRET_STRIPE);
         await stripe.charges.create({
            amount: 2000,
            currency: 'usd',
            description: 'An example charge',
            source: token.id
        },
        async (err,charge)=>{
            {if(err) console.log('stripe error',err)} //if err occurs, console log err
            await db.add_to_orders.push([userId])
                .then(orders=>console.log(orders)||res.status(200).send(orders))
                .catch(err=>console.log(err))
            await db.clear_cart.push([userId])
                .then(emptyCart=>console.log(orders)||res.status(200).send(emptyCart))
                .catch(err=>console.log(err))
                console.log(charge)
                res.sendStatus(200)
        })}catch(err){
            console.log(err)
        }
})

// async function () {
//     await db.push()
//     db.delte()
// }


app.listen(SERVER_PORT,()=>console.log(`Listening on port: ${SERVER_PORT}`))






// await db.add_to_orders.push([userId])
//                 .then(orders=>console.log(orders)||res.status(200).send(orders))
//                 .catch(err=>console.log(err))
//             await db.clear_cart.push([userId])
//                 .then(emptyCart=>console.log(orders)||res.status(200).send(emptyCart))
//                 .catch(err=>console.log(err))