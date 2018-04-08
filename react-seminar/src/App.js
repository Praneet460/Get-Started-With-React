import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// we are creating a new react component
class App extends Component {
  // any component need a constructor first, so add it
  constructor(){
    //this will allow us to use keyword 'this' in javascript
    super();
    // set the initial state
    this.state = {
      count : 0
    };
  }
  // constructor is created

    //create the increment function
    increment = () => {
      this.setState({count : this.state.count + 1});
    }




  //now we need to create the render
  // render contains the HTML tags we need to displayed on the web page
  render(){
    return (
      <div>

         <button onClick={this.increment}>Increment</button>
         {this.state.count}
      </div>
    );
  }
}

export default App;
