const express = require('express');
const path = require('path');

const app = express();
const port = 1337;

app.use(express.static(path.join(__dirname, '../src/dist')));

app.listen(port, () => console.log('Connected to port: ', port));