import React,{Component} from 'react';
import {Link} from 'react-router-dom';


export default class Parent extends Component{
    constructor(){
        super()
        this.state={}
    }

    render(){
        return(
            <div className='parent-container'>
                <Link className='account-link' to='/account'> <div class='account-button'>Account</div></Link>

                <Link className='orders-link' to='/orders'><div class='orders-button'>Orders</div></Link>

                <Link className='cart-link' to='/cart'> <i class="fas fa-shopping-cart fa-lg">Cart</i></Link>
            </div>
        )
    }
}

{/* <img src='https://cosmikdebris.s3.amazonaws.com/276dbca5-93a6-476c-8115-b6a50829d899-outline-shopping_cart-24px.svg'></img> */}