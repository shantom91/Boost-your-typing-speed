
import React, { useState } from "react";
import "../componentcss/allcss.css";


 
function Input(props) {
     
       
      let expected=props.expected;
      let inc=props.fun;
      let rdy=props.start;
    const [entered,setEntered]=useState('');
    const fixIt=(event)=>{
         if(rdy) 
      setEntered(event.target.value);
        let x=event.target.value;
        let y=[...x];
        let l=y.length;

      //  console.log(expected,event.target.value,x,y);
        if(expected===y[l-1] && rdy )
            inc();
      
        
    } 

  return (
      <>
      <textarea value={entered} className="entered" onChange={fixIt}></textarea>
             
      </>
        
  );
}

export default Input;
