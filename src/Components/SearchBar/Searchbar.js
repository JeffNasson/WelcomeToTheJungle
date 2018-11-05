import React,{Component} from 'react';
import Zip from '../SearchBar/Zipcode/Zip.js'
import Parent from '../SearchBar/AcctOrdersCartButtons/Parent.js'

import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Searchbar extends Component{
    constructor(){
        super();
        this.state={
            input:'',
            departments:[],
            merchToDisplay:[]

        }
    }

    componentDidMount(){
        axios.get(`/api/departments`)
             .then((res)=>{
                 this.setState({departments:res.data})
             })
    }

    displayDepartment(departmentId){
        axios.get(`/api/merchandise/${departmentId}`)
             .then((res)=>this.setState({merchToDisplay:res.data}))
    }


    render(){
        // console.log(this.state.input);
        // let showDepartment = this.state.merchToDisplay.map((department,i)=>{
        //     return(
        //         <div className='dropdown-list'>
        //             <select>
        //                 <option onClick={()=>this.displayDepartment(department.id)}>{department.id}</option>
        //             </select>
        //         </div>
        //     )
        // })
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