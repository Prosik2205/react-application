import React from "react";
import './style.css';

function Card (props) {
 return (
  <div className="card">
    <img src={props.image} alt=""/>
    
    
   <p id="text1">{props.text1}</p>
   <p id="text2">{props.text2}</p>
   <p id="text3">{props.text3}</p>
   
   
  
  </div>
 );
}

export default Card;