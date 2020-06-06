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
      
      subject:'',
      question:"",
    
    option1:"",
    
    option2:"",
    
    option3:"",
    
    option4:"",
    
    correct:"",
  
  
 

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
    const title=this.state.subject;
    const equestion= this.state.question;
    const eoption1= this.state.option1;
    const eoption2= this.state.option2;
    const eoption3= this.state.option3;
    const eoption4= this.state.option4;
    const eCorrect= this.state.Correct;
     console.log(this.state.question)
     axios.post('http://localhost:3000/admin/addquiz',{
      Tilte:title,
      question: equestion,
       option1: eoption1,
       option2: eoption2,
       option3:  eoption3,
       option4:  eoption4,
       Correct:  eCorrect,
     })
     .then(res => 
      console.log(res),
      alert('Data Successfully added!'))
     .catch(error=> console.error(error));
       
  }    
    
  

render(){
  
   
  
  return (
    
  <div className="App">
       
      <center><h1>Questions</h1></center>
     
  
     <div >  
          <form onSubmit={this.handleSubmit}>   
          <div className="box" >
            <label for="Subject" >Subject </label>
            <input style={{marginTop:0}}
                size="50"
              name="subject"
              placeholder="Write here"
             
              onChange={this.handleChange}
            />
            </div>
          <div className="box" >
            <label for="Question" >Question </label>
            <input style={{marginTop:0}}
                size="50"
              name="question"
              placeholder="Write here"
             
              onChange={this.handleChange}
            />
            <br/>
            <label for="Option">Options</label>
            <input style={{marginRight:6}}
              name="option1"
              placeholder="Option 1"
         
              onChange={this.handleChange}
            />
            <input
              // className="ml10"
              name="option2"
              
              placeholder="Option 2"
         
              onChange={this.handleChange}
            />
            <br/>
            <input
              name="option3"
              style={{marginRight:6,marginTop:10}}
              placeholder="Option 3"
           
              onChange={this.handleChange}
            />
            <input
              className="ml10"
              name="option4"
              style={{marginTop:10, }}
              placeholder="Option 4"
              
              onChange={this.handleChange}
            />
            <br/>
            <label for="Answer">Correct Answer</label>
            <input
              // className="ml10"
              name="correct"
              placeholder="Enter Correct Option"
            
              onChange={this.handleChange}
            />
            <div className="btn-box">
          
         
            <button   style={{marginLeft:6,marginTop:30, width:'8%',backgroundColor:'lightgreen'}} 
        >Add</button>
              {/*  */}
            </div>
          </div>
      
      
         
    </form>

    </div>
    </div>

 );
    }
    }  
export default Survey;