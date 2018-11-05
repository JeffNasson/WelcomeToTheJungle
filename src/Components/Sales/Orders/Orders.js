import React,{Component} from 'react'

import SearchBar from '../../SearchBar/Searchbar.js';
import Header from '../../Header/Header.js';
import BannerAd from '../../Banners/Parent/Parent.js';

export default class Orders extends Component{
    constructor(){
        super()
        this.state={}
    }

    render(){
        return(
            <div class='orders-parent'>
                <Header />
                <SearchBar />
                <BannerAd />
                Orders
            </div>
        ) 
    }
}


