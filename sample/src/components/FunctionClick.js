import React, { Component } from 'react'
//event handlers should not call the function
function FunctionClick() {
    function clickHandler(){
       <h1>Button clicked</h1>

    }
    
  
    return (
      <div>
          <button onClick = {clickHandler()}>Click</button>
      </div>
    )
  
}

export default FunctionClick