import React, { Component } from 'react';
import {render } from 'react-dom';


class Display extends Component {
  render() {
    return (
      <div>
        Hello React
      </div>
    );
  }
}

class UpdateMessage extends Component {
constructor(){
  super();
  this.state= {message:"Initial Name"};
this.updateMessage = this.updateMessage.bind(this);
}

  updateMessage() {
    this.setState({
      message: "Thanks for update"
    })
  }

  render() {
    return (
      <div>
        {this.state.message}
        <button onClick={this.updateMessage}> Click </button>
      </div>
    );
  }
}

class ClickMe extends Component {
  constructor(){
    super();
    this.state = {count:1};
    this.increaseMe = this.increaseMe.bind(this);
    this.decreaseMe = this.decreaseMe.bind(this);
  }

  increaseMe = (event)=> {
    let x = this.state.count
    this.setState({
      count: x+1
    })
  }

  decreaseMe = (event)=> {
    let x = this.state.count
    this.setState({
      count: x-1
    })
  }

  render(){
    return(
      <div>
        <h1><h1>{this.state.count}</h1></h1>
        <button onClick={this.decreaseMe}> - Me</button>
        <button onClick={this.increaseMe}> + Me</button>
      </div>
    );
  }
}

// application render
render(
    <ClickMe />, 
    document.getElementById("root")
);

