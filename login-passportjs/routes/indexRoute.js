const express = require('express');

const routes = express.Router();

const { loginPage, registerPage, registerUser } = require('../controllers/AuthController');


routes.get('/', loginPage)
routes.get('/register', registerPage)
routes.post('/registeruser', registerUser)

module.exports = routes;