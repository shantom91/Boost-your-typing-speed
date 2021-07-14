

import React, { useState } from "react";
import Text from "./Text";
import Input from "./Input";
import Clock from "./Clock";
import TotalWord from "./TotalWord";
function App() {
  
    const [i, setI] = useState(0);
    const [ready, setReady] = useState(0);
    const [bt, setBt] = useState("Start");
    let s =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magni ducimus dolore soluta officiis aliquam iusto sit? Temporibus nostrum, dicta voluptates, necessitatibus assumenda incidunt non voluptatum provident velit quos, accusantium corporis dolore. Et, dignissimos at! Repellendus nisi dolores odio accusamus quod facere voluptate tempora magni minima. Neque porro expedita eveniet cumque excepturi blanditiis modi aspernatur dolores ad explicabo vero, error saepe recusandae nulla minima iure, mollitia at, consectetur culpa optio esse ipsa. Dolorum vero nisi accusantium deserunt, facilis repudiandae saepe neque obcaecati maxime distinctio ipsum aspernatur quia eveniet deleniti rerum repellendus est. Ipsum qui nesciunt minus dolore. Providentvoluptatem nesciunt!";
    
   
    const inc=()=>{
       console.log("called");  
        setI(i + 1);  
         }

      const trig=()=>{
           if(ready===0)
           {
                setBt("Stop");
                setReady(1);  
           }  
           else
           {
            setBt("Start");
            setReady(0);  
       }  
      }



  return (
        <> 
     
         <div className="both1">
       <Clock start={ready} btname={bt} fun={trig}/>
        <Text index={i} data={s}/>
        </div>
        <div className="both2">
        <TotalWord tot={i}  />
        <Input expected={s[i]} fun={inc} start={ready}/>
        </div>

        <button type="button" class="btn btn-success start"  onClick={trig}>{bt}</button>
        </>
        
  );
}

export default App;
