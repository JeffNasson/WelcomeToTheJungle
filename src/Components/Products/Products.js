import React,{Component} from 'react';
import axios from 'axios';

export default class Products extends Component{

    render(){
        return(
            <div class='products-parent'>
                <div class='1'>Product Picture</div>
                <div class='2'>Product Description</div>
                <div class='3'>Price</div>
                <div class='4'>Add To Cart Sidebar</div>
            </div>
        )
    }
}