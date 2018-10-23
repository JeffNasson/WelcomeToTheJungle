//The display banner at the top of the page. When clicked it will take you to a random department.

import React,{Component} from 'react';

export default class Header extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div class='header-container'>
               <a href='http://www.amazon.com/'><img class='header-image'>
                </img></a>
            </div>
        )
    }
}