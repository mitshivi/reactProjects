import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './Components/Employee';
import editEmp from'./Components/editEmp';

class App extends Component {
  constructor(){
    super()
    this.state={
      employees:[]
    }
  }
      handleEmployee(newemp){
        alert("the data is received");
        this.state.employees.push(newemp);
     }
  
  render() {
    let emp
    return (
      <div>
          <Employee onAddEmployee={this.handleEmployee.bind(this)}/>
          <editEmp employees={this.state.employees}></editEmp>  
      </div>
    );
  }
}

export default App;
