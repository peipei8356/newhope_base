import React from 'react'
import ReactDOM from 'react-dom'
import './main.css'

let style = {
  color: 'white',
  fontSize: '100px'
}

let jsx = <div style={style}>hello,qiutianze</div>

class Component extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  
  render () {
    return jsx
  }
}

ReactDOM.render(
  Component,
  document.getElementById('app')
)
