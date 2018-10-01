import React, { Component } from 'react';
import Updemp from './Updemp.js'

class Employee extends Component {
  constructor(){
    super();
    this.state={
      newEmployee:{}
    }
  }
  handleSubmit(e)
  {
    e.preventDefault();
    console.log("Submitted!!! "+this.refs.name.value);
    this.setState({
      newEmployee:{
        id:this.refs.id.value,
        name:this.refs.name.value,
        salary:this.refs.salary.value,
      }
      },function(){
        console.log("new Emplyoee:"+this.state.newEmployee.id);
        this.props.onAddEmployee(this.state.newEmployee);
          
  });
  }
  
  
  

  render() {
    return (
      <div>
        <br/>
        <br/>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div>
        <label>ID:</label><br/>
        <input type="text" ref="id" required/>
        </div>
        <div>
        <label>Name:</label><br/>
        <input type="text" ref="name" required/>
        </div>
        <div>
        <label>Salary:</label><br/>
        <input type="text" ref="salary" required/>
        <br/><br/>
        </div>
        <input type="submit" value="Submit Data"/>
        <input type="reset" value="clear"/>  
      </form>
      <Updemp addedemp={this.state.newEmployee}></Updemp>
      </div>
    );
  }
}

export default Employee;



//we are required to pass the data to the update child component and display it