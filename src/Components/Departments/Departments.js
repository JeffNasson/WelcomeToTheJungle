import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/Searchbar.js';

export default class Department extends Component{
    constructor(){
        super();
        this.state={
            departments:[],
            chosenDepartment: '',
            merchToDisplay:[]
        }
        this.displayDepartment=this.displayDepartment.bind(this);
    }

    componentDidMount(){
        axios.get(`/api/departments`)
             .then((res)=>{
                //  console.log(res.data)
                 this.setState({departments:res.data})
             })
    }

    displayDepartment(departmentId){
        axios.get(`/api/merchandise/${departmentId}`)
             .then((res)=>this.setState({merchToDisplay:res.data})||console.log(this.state.merchToDisplay))
             
    }

    render(){
        // console.log(this.state.merchToDisplay);
        // console.log(this.state.chosenDepartment);
        let allDepartments = this.state.departments.map((department,i)=>{
            // console.log(department);
            // console.log(i);
            return(
                <div className='all-departments' key={i}>
                    <button onClick={()=>this.displayDepartment(department.id)}>{department.name} </button>
                </div>
            )
        })

        let showDepartments = this.state.merchToDisplay.map((merch,i)=>{
            console.log(merch)
            return(
               <Link to={`/products/${merch.id}`}> <div className='merch-display' key={i}>
                  <h5> ${merch.price}</h5>
                    <h5>{merch.name}</h5> 
                    <img src={merch.image}/>
                    {/* {merch.description}  */}
                </div></Link>
            )
        })
        return(
            <div className='department-parent'>
                <SearchBar />
                <div className='department-buttons'>{allDepartments}</div>
                <div className='merch-items'> {showDepartments}</div>
            </div>
        )
    }
}

//flex direction column