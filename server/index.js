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



// app.post( '/api/products', controller.create);
// app.get( '/api/products' , controller.getOne);
// app.put( '/api/products/:id', controller.update );
// app.delete( '/api/products/:id', controller.delete);