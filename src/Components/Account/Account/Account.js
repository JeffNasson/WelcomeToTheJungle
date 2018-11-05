import React,{Component} from 'react';
import Login from '../Login/Login.js';
import Private from '../Private/Private.js';
import SearchBar from '../../SearchBar/Searchbar.js';
import Header from '../../Header/Header.js';
import BannerAd from '../../Banners/Parent/Parent.js';

export default class Account extends Component{
    constructor(){
        super()
        this.state={}
    }

    render(){
        return(
            <div class='account-parent'>
                <Login />
                <Header />
                <SearchBar />
                <BannerAd />
                Account
            </div>
        )
    }
}



