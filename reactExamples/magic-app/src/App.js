import React, { Component } from 'react';
import Customers from './components/customers';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      customers:[],
    }
  }
  componentWillMount(){
    this.setState({
       customers:[
        {
         username:"Ajay",
         email:"ajay@gmail.com",
         mobile:98989766545,
         address:"2nd cross street,T.nagar,Chennai",
         purpose:"Looking for 3 BHK home",
         date:"23/07/2018"
        }
      ]
    });
  }
  //adding the customer in the table
  handleAddCustomer(newCost){
  alert("the customer is being added");
  let customers=this.state.customers;
  customers.push(newCost);
  this.setState({customers:customers});
}
//deleting the customer data
handleDeleteCustomer(name){
  alert("the Customer will be deleted.. ");
  console.log("yahooo"+name);
  let allCustomers=this.state.customers;
  let index=allCustomers.findIndex(customer=>customer.username==name);
  allCustomers.splice(index,1);
  this.setState({customers:allCustomers});
}

  render() {
    return (
      <div className="App">
        hollaaa
        <Customers Customers={this.state.customers} onAddCustomer={this.handleAddCustomer.bind(this)} onDeleteCustomer={this.handleDeleteCustomer.bind(this)}/>
      </div>
    );
  }
}

export default App;
