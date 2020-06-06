import React from 'react';
import { Form } from 'antd';
import { Button } from 'antd';
import './field.css';
import './update.scss';
import axios from 'axios'
// import { useState } from "react";
// import axios from 'axios';
// import firebase from '../firebase.js'
// import  firebase from 'firebase';
import ReactDOM from 'react-dom';


var counter=1;

export default class viewSurvey extends React.Component{
  constructor() {
    super()
    this.state = { 
    
        name: "",

    
        eamil:"",
      
      phone:"",
      
   
items:[],

  }
 
  
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this); 
  this.removeItem=this.removeItem.bind(this);
 
}
 
handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e,itemId) {
    e.preventDefault();
    const ename=this.state.name;
  
    console.log(this.state.correct)
    axios.put(`http://localhost:3000/admin/assign/${itemId}/teacher/${ename}`)
      .then(res => 
      console.log(res),
      alert('Data Successfully Updated!'))
     .catch(error=> console.error(error));
}

   



componentDidMount() {
  axios.get('http://localhost:3000/admin/viewclasses')
  .then(res => {
      this.setState({
        items:res.data
      });
      console.log("booking: ",this.state.items);
      
  })
}
  
  

  
  removeItem(itemId) {
    axios.delete(`http://localhost:3000/admin/deletebooking/${itemId}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
            this.forceUpdate()
            
          })
  }
  
  
  displayQuestion (itemId) {
      // console.log(itemId)
    const add = (
        
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
       onClick={(e) => this.handleSubmit(e, itemId)}>Add</button>
            {/*  */}
          </div>
        
    
    
       
  </form>


    );
    ReactDOM.render(add, document.getElementById('name'));
}
 
  render(){
    
      


      return(
      
        <div >
 
            <div >
    


    
          </div>


   

            <center style={{marginLeft:-60}}>
        <ul>
        
          {this.state.items.map((item) => {
         //   console.log(item.question)
    
            
         
            return (

<li key={item.id}>      

         <div id="login-container">


  
  <h1>
   Name
  </h1>
  <div class="description">
  {item.name}
  </div>
 

 
    <div style={{display:'flex',flexDirection:'row'}}>
  <button onClick={() => this.removeItem(item._id)}>Remove</button>

  <button onClick={()=>this.displayQuestion(item._id)}>Update</button>
  <div id="name" style={{marginLeft:30,marginTop:-230}}></div>     
  </div>
 
</div>
               
            
  
           
        
              </li>
            )
          })}
        </ul>
        </center>
      </div>
      )
  }

}
