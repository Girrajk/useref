import React, { Component } from 'react'

export default class CEffect extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount(){
    console.log("componentDidMount called");
    
  }

  componentDidUpdate(){
    console.log("componentDidUpdate called");
    
  }

  updateCount = ()=> {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.updateCount}>Click</button>
      </div>
    )
  }
}
