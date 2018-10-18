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
                    {/* <a href='http://www.amazon.com/' class='header-link-to'></a> */}
                </img></a>
            </div>
        )
    }
}