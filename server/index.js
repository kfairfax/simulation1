const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const app = express();
const massive = require('massive');
require('dotenv').config();

app.use(bodyParser.json());


massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db', dbInstance);
})

const port = process.env.PORT || 3500;
app.listen(port,()=>{
    console.log(`Listening on port ${port}.`)
});


app.get('/api/products', (req, res) => {
    const db = req.app.get ('db');
    console.log('db')
    db.read_product().then(products=>{res.send(products)})
  });
  

//   create: (req, res) => {
//     const { name, price } = req.body;
//     gifts.push({ id, name, price });
//     id++;
//     res.status(200).send(gifts)
  