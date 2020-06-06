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
    
        title: "",

    
        question:"",
      
      option1:"",
      
      option2:"",
      
      option3:"",
      
      option4:"",
      
      correct:"",
   
      textDisplay: false,
items:[],
items1:[]
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
    const question= this.state.question;
    const option1= this.state.option1;
    const option2= this.state.option2;
    const option3= this.state.option3;
    const option4= this.state.option4;
    const Correct= this.state.correct;
    console.log(this.state.correct)
    axios.put(`http://localhost:3000/admin/updatequiz/${itemId}/${question}/${option1}/${option2}/${option3}/${option4}/${Correct}`)
      .then(res => 
      console.log(res),
      alert('Data Successfully Updated!'))
     .catch(error=> console.error(error));
}

   



componentDidMount() {
  axios.get('http://localhost:3000/admin/Quiz')
  .then(res => {
      this.setState({
        items:res.data
      });
      console.log("students: ",this.state.items);
      
  })
}
  
  

  
  removeItem(itemId) {
    axios.delete(`http://localhost:3000/admin/deletequiz/${itemId}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
            this.forceUpdate()
            
          })
  }
  
  
  displayQuestion (itemId) {
      // console.log(itemId)
    const add = (
        
        <form >      
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
         className="ml10"
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
       />]
       <br/>
       <label for="Answer">Correct Answer</label>
       <input
         className="ml10"
         name="correct"
         placeholder="Enter Correct Option"
       
         onChange={this.handleChange}
       />
       <div className=
       "btn-box">
     
    
       <button   style={{marginLeft:6,marginTop:30, width:'25%',backgroundColor:'lightgreen'}} 
 onClick={(e) => this.handleSubmit(e, itemId)}>Add</button>
 
         {/*  */}
       </div>
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
   Question
  </h1>
  <div class="description">
  {item.question}
  </div>
  <div class="social">
    <a>{item.option1}</a>
    <a>{item.option2}</a>
    <a>{item.option3}</a>
    <a>{item.option4}</a>
  </div>

  <div >
 <center>  <h3>
   Correct Answer
  </h3>
    <a>{item.Correct}</a>
    </center>

    </div>
    <div style={{display:'flex',flexDirection:'row'}}>
  <button onClick={() => this.removeItem(item.question)}>Remove</button>

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
