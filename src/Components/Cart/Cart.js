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
    }

    componentDidMount(){
        const cartId = this.props.match.params.id
        axios.get(`/api/cart`)
             .then((res)=>{
                 console.log(res.data);
                 this.setState({cart:res.data})
             })
    }

    //onClick event to remove item from cart

    //onChange event to edit item quantity in cart
    
    render(){
        let cartDisplay = this.state.cart.map((items,i)=>{
            return(
                <div className='cart-display-parent'>
                    <img src={items.image} />
                    {items.name}
                    ${items.price}
                </div>
            )
        })
        return(
            <div>
                {cartDisplay}
                <button>Stripe goes here later</button>
            </div>
        )
    }
}