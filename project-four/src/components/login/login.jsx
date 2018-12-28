import React from 'react'
import ReactDome from 'react-dom'

class Login extends React.Component {
  constructor () {
    this.state = {
      userName: '',
      userPwd: ''
    }
  }
  
  render () {
    return (
      <div>
        <input type="text"/>
      </div>
    )
  }
}
