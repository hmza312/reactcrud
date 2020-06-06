import React from 'react';
import { Form } from 'antd';
import { Button } from 'antd';

import './field.css';
// import { useState } from "react";
import axios from 'axios';


var counter=1;

class Survey extends React.Component{
  constructor() {
    super()
    this.state = {     
      
      name:'',
      eamil:"",
    
    phone:"",

  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this); 
 

} 
handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
}
  handleSubmit(e) {
    e.preventDefault();
    const ename=this.state.name;
    const eemail= this.state.email;
    const ephone= this.state.phone;
 
     axios.post('http://localhost:3000/admin/addclass',{
      name:ename,
      email: eemail,
       phone: ephone,
   
     
     })
     .then(res => 
      console.log(res),
      alert('Data Successfully added!'))
     .catch(error=> console.error(error));
       
  }    
    
  

render(){
  
   
  
  return (
    
  <div className="App">
       
      <center><h1>class</h1></center>
     
  
     <div >  
          <form onSubmit={this.handleSubmit}>   
          <div className="box" >
            <label for="Subject" >Name </label>
            <input style={{marginTop:0}}
                size="50"
              name="subject"
              placeholder="Write here"
             
              onChange={this.handleChange}
            />
            </div>
         
            <div className="btn-box">
          
         
            <button   style={{marginLeft:6,marginTop:30, width:'8%',backgroundColor:'lightgreen'}} 
        >Add</button>
              {/*  */}
            </div>
          
      
      
         
    </form>

    </div>
    </div>

 );
    }
    }  
export default Survey;