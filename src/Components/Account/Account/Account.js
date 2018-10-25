import React,{Component} from 'react';
import Login from '../Login/Login.js';
import Private from '../Private/Private.js';

export default class Account extends Component{
    constructor(){
        super()
        this.state={}
    }

    render(){
        return(
            <div class='account-parent'>
                <Login />
                Account
            </div>
        )
    }
}