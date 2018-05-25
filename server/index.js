const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller/controller');
const app = express();

app.use(bodyParser.json());

app.post( '/api/product', controller.create );
app.get( '/api/products', controller.read );
app.put( '/api/product/:id', controller.update );
app.delete( '/api/product/:id', controller.delete );