//cart page. Will render all items currently in the cart. 
//Will also contain a checkout button that routes you to the checkout page.

import React,{Component} from 'react';


export default class Cart extends Component{
    constructor(){
        super();
        this.state={
            cart:['item']
        }
    }

    render(){
        return(
            <div>
                {this.state.cart}
                <button>Checkout</button>
            </div>
        )
    }
}