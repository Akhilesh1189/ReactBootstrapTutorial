import React, { Component } from 'react';
import {BrowserRouter as Router,Link,NavLink,Redirect } from 'react-router-dom'
import Route from 'react-router-dom/Route';
const User = () => {
  return (<h1>Welcome Users</h1>)
}
class Counter extends Component {
  state ={
    loggedIn: false
  }
  loginHandle = () => {
    this.setState({})
  }
  render() {
          return (
                  <Router>
                  <div className="App">
                  <ul>
                  <li> 
                  <NavLink to="/home" activeStyle= {{color : 'green'}} exact strict>Home</NavLink>
                  </li>
                  <NavLink to="/about" 
                  activeStyle= {{color : 'green'}} exact strict>About</NavLink>
                  
                  </ul>
                  </div>
                  
                  </Router>      
          );
  }
}

export default Counter;
