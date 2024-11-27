
const UserModel = require('../models/UserModel');

const fs = require('fs');

const formPage = (req, res) => {
    return res.render('form')
}
const addRecord = async (req, res) => {
    try {
        const { blogname, description } = req.body;
        await UserModel.create({
            blogname: blogname,
            description: description,
            image: req.file.path,
        })
        return res.redirect('back')
    } catch (err) {
        console.log(err);
        return false;

    }
}
const viewData = async (req, res) => {
    try {
        let users = await UserModel.find({});
        return res.render('view', {
            users
        })
    } catch (err) {
        console.log(err);
        return false
    }
}
const deleteRecord = async (req, res) => {
    try {
        let id = req.query.id;
        console.log(id);
        
        let single = await UserModel.findById(id);
       
        
        fs.unlinkSync(single.image);
        await UserModel.findByIdAndDelete(id);
        console.log(`user delete`);
        return res.redirect('viewrecord');
    } catch (err) {
        console.log(err);
        return false;
    }
}
const readmore =async (req,res)=>{
    try {
        let id = req.query.id;
        console.log(id);
        
        let single = await UserModel.findById(id);
       
        fs.unlinkSync(single.image);
        await UserModel.findByIdAndDelete(id);
        // console.log(`user delete`);
        return res.redirect('readmore');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editRecord = async (req, res) => {
    try {
        let id = req.query.id;
        let single = await UserModel.findById(id);
        return res.render('edit', {
            single
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateRecord = async (req, res) => {
    try {
        const { editid, blogname, description } = req.body;
        if (req.file) {
            let single = await UserModel.findById(editid);
            fs.unlinkSync(single.image);
            await UserModel.findByIdAndUpdate(editid, {
                blogname: blogname,
                description: description,
                image: req.file.path
            })
            console.log("record update");
            return res.redirect('/viewrecord');
        } else {
            let single = await UserModel.findById(editid);
            await UserModel.findByIdAndUpdate(editid, {
                blogname: blogname,
                description: description,
                image: single.image
            })
            console.log("record update");
            return res.redirect('/viewrecord');
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}
module.exports = {
    formPage, addRecord, viewData, deleteRecord, editRecord, updateRecord,readmore
}