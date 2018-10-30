//site home page. Will render all components

import React,{Component} from 'react';

import SearchBar from '../SearchBar/Searchbar.js';
import Header from '../Header/Header.js';
import BannerAd from '../Banners/Parent/Parent.js';


export default class Home extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div className='home'>
                <Header />
                <SearchBar />
                <BannerAd />
            </div>
        )
    }
}