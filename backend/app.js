//imports
const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const { readdirSync } = require('fs');

require('dotenv').config();
const PORT = process.env.PORT

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
    db();
    app.listen(PORT, () => {
        console.log('You are listing to port:', PORT);
    })
}

server();