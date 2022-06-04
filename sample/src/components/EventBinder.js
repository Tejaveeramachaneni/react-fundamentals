import React, { Component } from 'react'

class EventBinder extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message:'Hello'
      }
      this.MessageDisplay = this.MessageDisplay.bind(this)
      //approach 2 
    }
    MessageDisplay(){
        this.setState({
            message:"This is the message displayed "
        })
    }
  render() {
    return (
      <div>
          <h2>{this.state.message}</h2>
          
          {/* <button onClick={()=>this.MessageDisplay()}>Click Here</button> */}
          {/* approach 1 */}
          <button onClick = {this.MessageDisplay}>Click Button</button>
          {/* approach 2  */}

      </div>
    )
  }
}

export default EventBinder