import React,{Component} from 'react'

import Account from './Account';
import Orders from './Orders';

export default class Parent extends Component{
    constructor(){
        super()
        this.state={}
    }

    render(){
        return(
            <div class='parent-container'>
                <a class='account-link' href='https://www.amazon.com'> <div class='account-button'>Account</div></a>

                <a class='orders-link' href='https://www.amazon.com'><div class='orders-button'>Orders</div></a>

                <a class='cart-link' href='https://www.amazon.com'> <i class="fas fa-shopping-cart fa-lg">Cart</i></a>
            </div>
        )
    }
}

{/* <img src='https://cosmikdebris.s3.amazonaws.com/276dbca5-93a6-476c-8115-b6a50829d899-outline-shopping_cart-24px.svg'></img> */}