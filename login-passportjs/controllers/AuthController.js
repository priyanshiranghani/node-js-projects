const UserModel = require('../models/UserModel');
const loginPage = (req, res) => {
    return res.render('login')
}
const registerPage = (req, res) => {
    return res.render('register')
}
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await UserModel.create({
            name: name,
            email: email,
            password: password
        })
        console.log("user create");
        return res.redirect('/')
    } catch (err) {
        console.log(err);
        return false;
    }

}
module.exports = {
    loginPage, registerPage, registerUser
}