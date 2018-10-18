import React,{Component} from 'react';

import SearchBar from '../SearchBar/Searchbar.js';
import Header from '../Header/Header.js';

export default class Home extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div class='home'>
                <Header />
                <SearchBar />
            </div>
        )
    }
}