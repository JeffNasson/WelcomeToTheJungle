import React,{Component} from 'react';
import axios from 'axios';

import SearchBar from '../SearchBar/Searchbar.js';

export default class Products extends Component{
    constructor(){
        super()
        this.state={
            item:[],
            cart:[]
        }
    }

    //display item and its properties
    componentDidMount(){
        // console.log(this.props.match)
        const itemId = this.props.match.params.id
        axios.get(`/api/items/${itemId}`)
             .then((res)=>{
                //  console.log(res.data)
                 this.setState({item:res.data})
             })
    }

    //onclick event to push item to cart
    addToCart(){}

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
                <div className='item-display2'> {itemDisplay}</div>
                <div className='add-to-cart-sidebar'><button>Add To Cart</button>Add To Cart Sidebar</div>
            </div>
        )
    }
}