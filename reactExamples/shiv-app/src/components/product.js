import React, { Component } from 'react';
import uuid from 'uuid';
class Product extends Component {

constructor(){
    super();
    this.state={
        newProduct:{},
        upddata:{}
    }
 var updname;
 var updid;
 var updprice;
}
 

handleSubmit(e)
{
  alert("Submitted!!!");
  this.setState({
      newProduct:{
          id:this.refs.id.value,
          name:this.refs.name.value,
          price:this.refs.price.value
      }
     
  },function()
  {
      console.log(this.state.newProduct);
      this.props.onAddProduct(this.state.newProduct);
  });
  
  e.preventDefault();
}
handleDelete(id)
{
    console.log("the value received is:"+ id);
    this.props.onDeleteProduct(id);
}

handleUpdate(prod)
{
    console.log("the value will be updated");
    console.log(prod);
    this.state.upddata=prod;
    this.updid=this.state.upddata.id;
    this.updname=this.state.upddata.name;
    this.updprice=this.state.upddata.price;
}

  render() {
      let productItems=this.props.Products.map(
          product=>(<tr><td key={product.id}>{product.id}</td><td refs={product.name}>{product.name}</td><td refs={product.price}>{product.price}</td><td><input type="button" value="Delete" className="btn btn-danger" onClick={this.handleDelete.bind(this,product.id)}/></td><input type="button" value="Update" className="btn btn-info" onClick={this.handleUpdate.bind(this,product)}/><td></td></tr>)
      );

    return (
      <div align="center">
      <h2>Product Information System</h2>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <table className="table-condensed">
          <thead>
          <tr>
            <td align="left">Product ID:</td>
            <td><input type="text" ref="id"/></td>
          </tr>
          <tr>
            <td align="left">Product Name:</td>
            <td><input type="text" ref="name"/></td>
          </tr>
          <tr>
            <td align="left">Product Price:</td>
            <td><input type="text" ref="price"/></td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><input  type="reset" value="Clear" className="btn btn-danger"/></td>
            <td><input type="submit" value="Submit Data" className="btn btn-info"/></td>
          </tr>
          </tbody>
      </table>
      </form>
      <div>
          <h2>Data Received</h2>
          <table className="table">
              <thead>
              <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th colSpan="2" align="center">Action</th>
              </tr>
              </thead>
              <tbody>
              {productItems}
              </tbody>
          </table>
      </div>
      <div>
          <h2>Data To be Updated</h2>
          <form>
          <table className="table-condensed">
              <thead>
              <tr>
                  <td>Product ID</td>
                  <td><input type="text" value={this.updid}/></td>
              </tr>
              <tr>
                  <td>Product Name</td>
                  <td><input type="text" value={this.updname}/></td>
              </tr>
              <tr>
                  <td>Product Price</td>
                  <td><input type="text" value={this.updprice}/></td>
              </tr>
           </thead>
           <tbody>
            
           </tbody>
          </table>
          </form>
      </div>
      </div>
    );
  }
}
export default Product;
