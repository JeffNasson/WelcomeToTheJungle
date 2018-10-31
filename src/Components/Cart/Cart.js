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
        axios.get(`/api/cart/${cartId}`)
             .then((res)=>{
                 this.setState({cart:res.data})
             })
    }
    
    render(){
        return(
            <div>
                {this.state.cart}
                <Link to='/checkout'><button>Checkout</button></Link>
            </div>
        )
    }
}