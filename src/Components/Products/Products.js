import React,{Component} from 'react';
import axios from 'axios';

import SearchBar from '../SearchBar/Searchbar.js';

export default class Products extends Component{
    constructor(){
        super()
        this.state={
            item:[],
            cart:[],
            quantity:1
        }
        this.addToCart = this.addToCart.bind(this);
    }

    //display item and its properties
    componentDidMount(){
        // console.log(this.props.match)
        const itemId = this.props.match.params.id
        axios.get(`/api/items/${itemId}`)
             .then((res)=>{
                //  console.log(res.data)
                console.log(this.state.cart)
                 this.setState({item:res.data})
             })
    }

    //onclick event to push item to cart
    addToCart(){
        let quantity = this.state.quantity
        const id = this.props.match.params.id
        axios.post(`/api/cart/${id}/${quantity}`)
             .then(()=>alert('added to cart'))
    }

    render(){
        let itemDisplay=this.state.item.map((item,i)=>{
            return(
                <div className='item-display'>
                  <div className='items-list'>
                    <div className='item-price'> ${item.price}</div>
                    <div className='item-description'>{item.description}</div>
                    <div className='item-name'>{item.name}</div>
                  </div>
                    <img src={item.image} />
                </div>
            )
        })

        return(
            <div className='products-parent'>
                <SearchBar />
                <div className='item-display2'> 
                    {itemDisplay}
                    <button onClick={this.addToCart} target={this.state.cart}>Add To Cart</button> 
                    <input type='number' min='1' max='10' value={this.state.quantity} onChange={(e)=>this.setState({quantity:e.target.value})} />
                </div>
            </div>
        )
    }
}