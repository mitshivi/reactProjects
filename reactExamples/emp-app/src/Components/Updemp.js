import React, { Component } from 'react';


class Updemp extends Component {
  constructor(){
    super()
    this.state={
      employees:[],
    
    }
  }
   
   static defaultProps={
     emparray:[],

   }

      handleEmployee(){
        alert("the data is received");
        this.state.employees.push(this.props.addedemp);
        console.log(this.state.employees),
        this.props.emparray.push(this.props.addedemp);
    }
  
  render() {
      var employeeItems;
      employeeItems=this.props.emparray.map(
      emp=>{return(
      <h2>emp.id</h2>,
      <h2>emp.name</h2>,
      <h2>emp.salary</h2>
      )}
      );   
    return (
      <div>
          <input type="button" value="click me" onClick={this.handleEmployee.bind(this)}/>
          <div>
              <label><h3>Employee ID</h3></label>
              <label>{employeeItems}</label>
          </div>
      </div>
    );
  }
}

export default Updemp;
