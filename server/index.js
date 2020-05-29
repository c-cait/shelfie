require('dotenv').config();
var cors = require('cors');
const express = require('express');
const app = express();
const massive = require('massive');
const ctrl = require('./controller');
const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());
app.use(cors());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected')
})

app.get('/api/products', ctrl.getAllProducts);
app.post('/api/products', ctrl.addProduct);

app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`))