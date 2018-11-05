import React,{Component} from 'react'
import axios from 'axios'

import SearchBar from '../../SearchBar/Searchbar.js';
import Header from '../../Header/Header.js';
import BannerAd from '../../Banners/Parent/Parent.js';

export default class Orders extends Component{
    constructor(){
        super()
        this.state={
            orders:[]
        }
    }

    componentDidMount(){
        axios.get(`/api/orders`)
             .then(res=>{
                 console.log(res)
                 this.setState({orders:res.data})
             })
    }

    render(){
        console.log(this.state.orders)
        let orderDisplay = this.state.orders.map((item,i)=>{
            console.log(item)
            return(
                <div className='orders'>
                    <div className='orders-child'>
                      <div className='item-name'> Name: {item.name}</div>
                        <div className='item-description'> Description: {item.description}</div>
                    <img src={item.image} />
                        <div className='item-price'>${item.price}</div>
                    </div>
                </div>
            )
        })
        return(
            <div class='orders-parent'>
                <Header />
                <SearchBar />
                <h1>Your Order History</h1>
                {orderDisplay}
            </div>
        ) 
    }
}


