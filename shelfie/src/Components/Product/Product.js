import React, { Component } from 'react';


const Product = (props) => {
    return (
    <div>
        <h1 className="App-title">Product</h1>
        {props.name}
        {props.price}
        {props.imageurl}
    </div>
) };

export default Product;