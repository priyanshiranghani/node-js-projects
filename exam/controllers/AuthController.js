const UserModel = require('../models/UserModel');
const loginPage = (req, res) => {
    if (res.locals.users) {
        return res.redirect('dashboard')
    }
    return res.render('index')
}
const loginUser = (req, res) => {
    return res.redirect('dashboard')
}

const submitbloguser= (req,res)=>{
    return res.render('viewblog')
}
const dashboardPage = (req, res) => {
    return res.render('dashboard')
}
const registerPage = (req, res) => {
    return res.render('register');
}

const viewblogpage = (req,res) => {
    return res.render('viewblog')
}

const addblogpage = (req,res) => {
    return res.render('addblog')
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await UserModel.create({
            name: name,
            email: email,
            password: password
        })
        console.log("user successfully create");
        return res.redirect('/');
    } catch (err) {
        console.log(err);
        return false;

    }
}

const viewPage = async (req, res) => {
    try {
        let users = await UserModel.find({});
        return res.render('view', {
            users
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}

const logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
            return false;
        }
        return res.redirect('/');
    });
}

module.exports = {
    loginPage, loginUser, dashboardPage, registerUser, registerPage, logout , viewblogpage ,viewPage,addblogpage,submitbloguser,
}