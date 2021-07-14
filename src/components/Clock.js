import React, { useState } from "react";
import "../componentcss/allcss.css"
 



function Clock(props) {
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(10);
  

  
   
  React.useEffect(() => {
    if ((seconds > 0||minutes>0) && props.start) {
      setTimeout(() =>{ 
            if(seconds)
        setSeconds(seconds - 1)
        else
        {
          setMinutes(minutes - 1);
          setSeconds(60);
        }
        
      }, 1000);
    }
    else if(props.start)
    {
          props.fun();
    } 
  });
   

  return (
    <div className="clock">
      <div>
      
           0{minutes}::{seconds/60? seconds:`0${seconds}`} 
          
    
      </div>
    </div>
  );
}

export default Clock;
