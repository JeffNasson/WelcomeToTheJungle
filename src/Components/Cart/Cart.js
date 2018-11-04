//cart page. Will render all items currently in the cart. 
//Will also contain a checkout button that routes you to the checkout page.

import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class Cart extends Component{
    constructor(){
        super();
        this.state={
            cart:[],
            item:[]
        }
        this.deleteItem=this.deleteItem.bind(this);
    }

    componentDidMount(){
        axios.get(`/api/cart`)
             .then((res)=>{
                 console.log(res.data);
                 this.setState({cart:res.data})
             })
    }

    //onClick event to remove item from cart

    deleteItem(itemId){
        axios.delete(`/api/cart/${itemId}`)
             .then((res)=>console.log(res.data)||this.setState({cart:res.data}))
    }
    
    render(){
        let cartDisplay = this.state.cart.map((item,i)=>{
            return(
                <div className='cart-display-parent' key={i}>
                    <img src={item.image} />
                    {item.name}
                    ${item.price}
                    <button onClick={()=>this.deleteItem(item.id)}>Delete Item</button>
                </div>
            )
        })

        // let deleteCartItem = this.state.cart.map((item,i)=>{
        //         console.log(item)
        //     return(
        //         <div className='remove-from-cart'>
                
        //             <button onClick={this.deleteItem}>Remove from Cart</button>
        //         </div>
        //     )
        // })
        return(
            <div>
                {cartDisplay}
                <Link to='/checkout'><button>Checkout</button></Link>
            </div>
        )
    }
}