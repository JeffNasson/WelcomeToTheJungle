module.exports={
    // login/logout
    login:(req,res)=>{
        if(req.session.user){
            res.status(200).send(req.session.user);
        } else {
            res.status(401).send('User not found, please login')
        }
    },

    logout:(req,res)=>{
        req.session.destroy();
        res.redirect(`/#/`)
    },

    //departments
    getDepartment:(req,res)=>{
        const db = req.app.get('db');
        const {id} = req.params;

        db.get_departments([id])
            .then(department=>res.status(200).send(department))
            .catch(err=>console.log(err))
    },

    getAllDepartments:(req,res)=>{
        const db = req.app.get('db');
        const all = req.params;
        db.get_all_departments([all])
            .then(departments=>res.status(200).send(departments))
            .catch(err=>console.log(err))
    },

    displayDepartment:(req,res)=>{
        const db = req.app.get('db');
        const {departmentId} = req.params;

        db.display_department([departmentId])
            .then(departmentId=>res.status(200).send(departmentId))
            .catch(err=>console.log(err))
    },

    // items
    displayItem:(req,res)=>{
        const db = req.app.get('db');
        const {id} = req.params;
        // console.log(req.params);

        db.get_item([id])
            .then(itemId=>console.log(itemId)||res.status(200).send(itemId))
            .catch(err=>console.log(err))
    },

    //shopping_cart
    displayCart:(req,res)=>{
        const db = req.app.get('db');
        const {id} = req.session.user;
        console.log(req.params)

        db.shopping_cart([id])
            .then(cartId=>console.log(cartId)||res.status(200).send(cartId))
            .catch(err=>console.log(err))
    },

    addToCart:(req,res)=>{
        const db = req.app.get('db')
        const {id,quantity} = req.params
        const userId = req.session.user.id
        console.log(req.params)

        db.add_to_cart([userId,id,quantity])
            .then(cartItems=>console.log(cartItems)||res.status(200).send(cartItems))
            .catch()
    },

    removeFromCart:(req,res)=>{
        const db=req.app.get('db')
        const userId = req.session.user.id
        const {itemId}=req.params
        console.log(userId)
        console.log(itemId)

        db.remove_from_cart([userId,+itemId])
            .then(updatedCart=>console.log(updatedCart)||res.status(200).send(updatedCart))
            .catch(err=>console.log(err))
    },

    //orders

    displayOrders:(req,res)=>{
        const db=req.app.get('db')
        const userId = req.session.user.id

        db.get_orders([userId]) 
            .then(displayOrders=>res.status(200).send(displayOrders))
            .catch(err=>console.log(err))
    }

}