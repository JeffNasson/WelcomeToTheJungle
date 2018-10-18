import React,{Component} from 'react';


export default class Cart extends Component{
    constructor(){
        super();
        this.state={
            cart:['item']
        }
    }

    render(){
        return(
            <div>
                {this.state.cart}
            </div>
        )
    }
}