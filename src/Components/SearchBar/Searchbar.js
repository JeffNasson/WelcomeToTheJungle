import React,{Component} from 'react';
import Zip from '../SearchBar/Zipcode/Zip.js'

export default class Searchbar extends Component{
    constructor(){
        super();
        this.state={
            input:''
        }
    }


    render(){
        console.log(this.state.input);
        return(
        <div class='searchcontainer'>
            <div class='searchbar'>
                <select>
                    <option>All</option>
                    <option>Stuff</option>
                    <option>More Stuff</option>
                </select>
                <input class='search'
                    placeholder='Search' 
                    target={this.state.input} 
                    onChange={(e)=>this.setState({input:e.target.value})} 
                    />
                <input 
                    class='buttoninput'
                    type='submit'
                    placeholder=''
                    />
            </div>
            <div class='zip'>
            <Zip />
            </div>
        </div>
        )
    }
}