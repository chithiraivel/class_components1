import React, { Component } from 'react'



 class Second extends Component {
    
  render() {

    console.log(this);
    return (
      <div>first Component {this.props.name}</div>
    )
  }
}

 class First extends Component {

    constructor(){
        super()
        this.state ={
            title: ' React JS',
            age:24
        }
    }

    updateTask(){
        console.log(this);
        this.setState({title:'javascript'})
    }
  render() {
    return (
      <div>hello {this.state.title}
      
      <button onClick={ () => this.updateTask()}>Click Me</button>

      <Second name={this.state.title}/>
      </div>

      
    )
  }
}

export default First