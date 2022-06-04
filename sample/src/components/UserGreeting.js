import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          isLoggedIn : false

       }
     }
  render() {
      if(this.state.isLoggedIn){
          return(
              <div>please login again</div>
          )
      }
      else{
          return(
              <div>Welcome Guest</div>
          )
      }
    // return (
    //   <div>
        //   <h1>Welcome Guest</h1>
        //   <h1>please login with correct password</h1>
    //    </div>
    // )
  }
}

export default UserGreeting