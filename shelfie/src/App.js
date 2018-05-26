import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import Dashboard from './Components/Dashboard/Dashboard';
import Product from './Components/Product/Product'

class App extends Component {
  constructor(){
    super();
    this.state ={
      product: [],
      inventory: [{
        name: 'pants', price: 100, imageurl: 'firsturl'},{
        name:'shoes', price: 150, imageurl: 'secondurl'}, {
        name: 'shirt', price: 120, imageurl: 'thirdurl'
        }]
    };

    this.addInventory=this.addInventory.bind(this);
  }


  componentDidMount() {
    axios.get('/api/products').then(response => {
      console.log(response.data)
      this.setState({ product: response.data })
    })
  }

  addInventory(name, price, imageurl) {
    axios.post( '/api/products', {
      name: name, 
      price: price,
      imageurl: imageurl

    }).then(response =>{
        this.setState({product: response.data})
      
    })
  }

  


  render() {
    const {product}=this.state;
    const {inventory} = this.state;

    console.log(product)
    return (
      <div>
      <Dashboard inventory={inventory}/>
      <Header/>
      <Form addInventory={this.addInventory} />
        {
          product.map(product => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imageurl={product.imageurl}
              // updateName={this.updateName}
              // deleteProduct={this.deleteProduct}
            />

          )
          )
          
        }


       
       
      </div>
    );
  }
}

export default App;

