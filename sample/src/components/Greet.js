import React, { Component } from 'react'//must include div tag in returnn
const Greet = (props) =>{
    console.log(props)
    return (
    <div>
        <h1>Hello {props.name} {props.heroName}</h1>
        {props.children}
    </div>
    )
   
}
export default Greet

