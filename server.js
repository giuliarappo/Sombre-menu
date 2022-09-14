const path = require('path');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');


app.use(express.static(path.join(__dirname, 'public')));

app.set('view-engine', 'html');

app.get('/', (req, res) => {
    res.redirect('index.html');
})

app.get('/login', (req, res) => {
    res.redirect('login.html');
})

app.listen(3000);