import React from 'react'
import { Button } from 'react-bootstrap';
import { useState } from 'react';

// const clickHandle=()=>{

//     console.log("My favorite color is green")

// } 
const Change = () => {
    const[colour,setColour]=useState("red");

    const clickHandle=()=>{
            setColour("green");

    }

    return (
    <div><h1 className='bg-warning text-white'>UseState Hook in React</h1>
    <h1>My favorite color is {colour}</h1>
    <Button variant="primary" onClick={clickHandle}>Change Color</Button><br/>
    </div>
  )
}

export default Change
