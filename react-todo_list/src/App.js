import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// creating a new react component
class App extends Component {
  // need to create a constructor
  constructor(){
    // allow to use keyword 'this'
    super();
    //set the initial state
    this.state ={
      todos:[],
      currenttodo: ""

    };
  }
  // constructor is created

  onInputChange = e => {
    this.setState({ currenttodo: e.target.value});
  }
  // make the copy of the original todo_list
  onClick = () => {
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currenttodo);
    this.setState({todos: todosCopy, currenttodo:""});
  }

  // create the render
  render(){
    let list = this.state.todos.map((e,i) =>{
      return(
        <li key={i}>{e}</li>
      );
    });
    return (
      <div>
        <input placeholder="Enter todo" value={this.state.currenttodo}
        onChange={this.onInputChange} />
        <button onClick={this.onClick}>Add Here</button>
        <br />
        {this.state.todos.length === 0 ? "No todos yet!" : <ul>{list}</ul>}
      </div>

    );
  }

}

export default App;
