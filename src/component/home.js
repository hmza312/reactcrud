import React from 'react';
import Main from "./main.js";
import DashBoard from "./dashBoard.js";
import  firebase from 'firebase';
import logo from '../logo.jpeg';
export default class home extends React.Component {
   
    render(){
       
        return(
                    <div style={{width:"100%",heigh:"100%"}}>
                           <div style={{width:"100%",height:"20%"}}> 
                           <img src={"https://thumbs.dreamstime.com/b/vector-horizontal-banner-concept-learning-management-system-computer-student-cup-lamp-megaphone-office-bag-flat-style-97833663.jpg"}  alt="sign up image" height="340px" width="100%"/>
                           </div>
                           <div style={{width:"100%",height:"30%"}}> 
                           <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrfMz814oxsZ_oMdWTtxUBb8uBB3QMbKOjwTJhEh8ELv0GDGjj&usqp=CAU"}  alt="sign up image" width="100%" height="170px"/>
                           </div>
                    </div>
           
     
        );
    
    }
  }
  
  