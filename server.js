const { join } = require('path');
const express = require('express');
const { getData } = require('./utils');
const { data } = require('./data.js');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser());
app.use(express.static(join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.get('/list', (req, res) => {
    const { count } = req.query;

    const slicedData = getData(data, count);

    res.send(slicedData);
});

app.listen(3000, () => console.log('port 3000'));
