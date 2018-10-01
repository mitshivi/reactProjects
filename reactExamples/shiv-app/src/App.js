import React, { Component } from 'react';
import Product from './components/product.js';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';


class App extends Component {
  constructor(){
    super()
    this.state={
      products:[],
    }
  }
  componentWillMount(){
    this.setState({
       products:[
        {
          id:101,
          name:"Television",
          price:1000
        },
        {
          id:102,
          name:"Fridge",
          price:20000
        },
        {
          id:103,
          name:"kuchbhi",
          price:3000
        }
      ]
    });
  }
  handleAddProduct(newProd){
  alert("the Product is being added");
  let products=this.state.products;
  products.push(newProd);
  this.setState({products:products});
}
handleDeleteProduct(id){
  alert("the product will be deleted.. ");
  console.log("yahooo"+id);
  let allProducts=this.state.products;
  let index=allProducts.findIndex(product=>product.id==id);
  allProducts.splice(index,1);
  this.setState({products:allProducts});
  
}


  render() {
    return (
     <div className="App">
     <Product Products={this.state.products} onAddProduct={this.handleAddProduct.bind(this)} onDeleteProduct={this.handleDeleteProduct.bind(this)}/>
     </div>

    );
  }
}

export default App;
