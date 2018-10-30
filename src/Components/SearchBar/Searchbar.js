import React,{Component} from 'react';
import Zip from '../SearchBar/Zipcode/Zip.js'
import Parent from '../SearchBar/AcctOrdersCartButtons/Parent.js'

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
        <div className='searchcontainer'>
            <div className='searchbar'>
                <select>
                    <option>All</option>
                    <option>Stuff</option>
                    <option>More Stuff</option>
                </select>
                <input className='search'
                    placeholder='Search' 
                    target={this.state.input} 
                    onChange={(e)=>this.setState({input:e.target.value})} 
                    />
                <input 
                    className='buttoninput'
                    type='submit'
                    placeholder=''
                    />
            </div>
                 <Zip />
                 <Parent />
        </div>
        )
    }
}