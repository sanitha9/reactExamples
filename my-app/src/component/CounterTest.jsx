import React from 'react'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
const CounterTest = () => {


      const[count,setCount]=useState(0);
    
      const clickIncrement=()=>{
               setCount(count+1);
           }
        const clickdecrement=()=>{
                    if(count==0){
                        return;
                    }
                    else{
                        setCount(count-1);
                    }
         }
  return (
    <div>
    <h1>Counter is {count}</h1><br/>
    <Button variant="success" onClick={clickIncrement}>+</Button>
   <Button variant="danger" style={{marginLeft:'20px' }} onClick={clickdecrement}>-</Button><br/>
    </div>
  )
}

export default CounterTest