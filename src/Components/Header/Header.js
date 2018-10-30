//The display banner at the top of the page. When clicked it will take you to a random department.

import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div className='header-container'>
               <Link to='/departments'><img className='header-image'>
                </img></Link>
            </div>
        )
    }
}