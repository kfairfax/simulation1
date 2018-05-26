import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: 0,
      imageurl: ''
    }
  }

  handleImgUrlChange(val) {
    this.setState({ imgageurl: val });
  }

  handleNameChange(val) {
    this.setState({ name: val });
  };

  handlePriceChange(val) {
    this.setState({ price: val });
  };

  handleCancel() {
    this.setState({
      name: '',
      price: '',
      imageurl: './default.png'
    });
  };





  render() {
    const { addInventory } = this.props;
    return (
      <div>
        <h1>Form</h1>
        <img src={this.state.imageurl} />

        <input className='imgInput' placeholder='Enter Img URL Here'
          onChange={(e) => { this.handleImgUrlChange(e.target.value) }} />

        <input className='nameInput' placeholder='Enter Product Name Here'
          onChange={(e) => { this.handleNameChange(e.target.value) }} />

        <input className='priceInput' placeholder='Enter Product Price Here'
          onChange={(e) => (this.handlePriceChange(e.target.value))} />

        <button className='addInventoryButton'
          onClick={() => { addInventory(this.state.name, this.state.price, this.state.imageurl) }}>Add Inventory</button>
 
        <button onClick= {()=>this.handleCancel()}>Cancel</button>


      </div>
    )
  }
}



