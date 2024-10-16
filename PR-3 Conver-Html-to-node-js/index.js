const express = require('express');


const port = 9090;

const app = express();

app.set('view engine', 'ejs');

const path = require('path');

app.use('/', express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
    return res.render('index');
})
app.get('/chart', (req, res) => {
    return res.render('chart');
})
app.get('/wideget', (req, res) => {
    return res.render('wideget');
})
app.get('/tables', (req, res) => {
    return res.render('tables');
})
app.get('/full-width', (req, res) => {
    return res.render('full-width');
})
app.get('/form-basic', (req, res) => {
    return res.render('form-basic');
})
app.get('/form-wizard', (req, res) => {
    return res.render('form-wizard');
})
app.get('/buttons', (req, res) => {
    return res.render('buttons');
})
app.get('/material-icons', (req, res) => {
    return res.render('material-icons');
})
app.get('/font-awesome-icon', (req, res) => {
    return res.render('font-awesome-icon');
})
app.get('/elements', (req, res) => {
    return res.render('elements');
})
app.get('/dashboard-2', (req, res) => {
    return res.render('dashboard-2');
})
app.get('/gallery', (req, res) => {
    return res.render('gallery');
})
app.get('/calender', (req, res) => {
    return res.render('calender');
})
app.get('/invoice', (req, res) => {
    return res.render('invoice');
})
app.get('/chat-option', (req, res) => {
    return res.render('chat-option');
})
app.get('/login', (req, res) => {
    return res.render('login');
})
app.get('/register', (req, res) => {
    return res.render('register');
})
app.get('/error-403', (req, res) => {
    return res.render('error-403');
})
app.get('/error-404', (req, res) => {
    return res.render('error-404');
})
app.get('/error-405', (req, res) => {
    return res.render('error-405');
})
app.get('/error-500', (req, res) => {
    return res.render('error-500');
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    } else {
        console.log(`server is running:- ${port}`);

    }
})