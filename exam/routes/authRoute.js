const express = require('express');
const { loginPage, loginUser, dashboardPage, registerPage, registerUser, logout, viewblogpage , viewPage,addblogpage,submitbloguser} = require('../controllers/AuthController');

const routes = express.Router();

const passport = require('passport');

routes.get('/', loginPage);
routes.post('/loginUser', passport.authenticate('local', { failureRedirect: '/' }), loginUser);
routes.post('/submitblog', passport.authenticate('local', { failureRedirect: '/' }),submitbloguser);
routes.get('/dashboard', passport.checkUser, dashboardPage);
routes.get('/viewblog', viewblogpage);
routes.get('/addblog',addblogpage);
routes.get('/view', viewPage);
routes.get('/register', registerPage);
routes.post('/registerUser', registerUser);
routes.get('/logout', logout)

module.exports = routes;