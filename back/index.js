const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');

const db = require('./db')


app.use(cors())
app.use(express.json())
app.use(routes)

db.sync()
app.listen('4567');

