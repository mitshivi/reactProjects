import React, { Component } from 'react';

class Customers extends Component {

    constructor(){
        super();
        this.state={
            newCustomer:{}
        }
    }
//submitting the data
handleSubmit(e)
{
alert("Submitted!!!");

this.setState({
      newCustomer:{
          username:this.refs.username.value,
          email:this.refs.email.value,
          mobile:this.refs.mobile.value,
          address:this.refs.address.value,
          purpose:this.refs.purpose.value,
          date:this.refs.date.value   
}
     
  },function()
  {
      //alert(this.state.newCustomer);
      this.props.onAddCustomer(this.state.newCustomer);
  });
  e.preventDefault();
}
//deleting the customer
handleDelete(name)
{
    console.log("the value received is:"+ name);
    this.props.onDeleteCustomer(name);
}


  render() 
  {
       let customerItems=this.props.Customers.map(
          customer=>(<thead><tr><td>Name:</td><td>{customer.username}</td></tr>
          <tr><td>Email id:</td><td>{customer.email}</td></tr>
          <tr><td>Mobile Number:</td><td>{customer.mobile}</td></tr>
          <tr><td>Address:</td><td>{customer.address}</td></tr>
          <tr><td>Description/Purpose:</td><td>{customer.purpose}</td></tr>
          <tr><td>Date of Visit:</td><td>{customer.date}</td><td><input type="button" value="delete" className="btn-danger" onClick={this.handleDelete.bind(this,customer.username)} /></td></tr><hr/>
          </thead>)
 );
    return (
      <div className="container">
      <div>
      <h2>Customer Registration Form</h2>
      <div className="jumbotron">
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div className="form-group">
       <input type="text" placeholder="Username" className="form-control" ref="username" required/>
      </div>
      <div className="form-group">
       <input type="email" placeholder="Email id" className="form-control" ref="email" required/>
      </div>
      <div className="form-group">
       <input type="number" placeholder="Mobile Number" className="form-control" ref="mobile" required/>
      </div>
      <div className="form-group">
       <input type="text" placeholder="Address" className="form-control" ref="address" required/>
      </div>
      <div className="form-group">
       <input type="text" placeholder="Purpose of visit" className="form-control" ref="purpose" required/>
      </div>
      <div className="form-group">
       <input type="date" placeholder="date of Visit" className="form-control" ref="date" required/>
      </div>
      <div className="form-group">
       <input type="submit" value="Log In" className="form-control btn-info"/>
      </div>
      </form>
      </div>
      </div>
      <div>
          <h2>Customers Visit Information</h2>
          <table className="table-condensed" align="center">
                  {customerItems}
          </table>
      </div>
      </div>
    );
  }
}

export default Customers;
