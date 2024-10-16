const express = require('express');

const port = 9999;


const app = express();

app.use(express.urlencoded());

let users = [];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    return res.render('index', {
        all: users
    }),mahadev,
})

app.post('/adduserRecord', (req, res) => {
    const { editid, task, status, deadline } = req.body
    if (editid) {
        const { editid, task, status, deadline } = req.body

        let up = users.map((val) => {
            if (val.id == editid) {
                val.task = task;
                val.status = status;
                val.deadline = deadline;
            }

            return val;
        })
        users = up;
        console.log("record update..");
        return res.redirect('/')
    } else {
        let obj = {
            id: Math.floor(Math.random() * 1000000),
            task: task,
            status: status,
            deadline: deadline,
        }
        users.push(obj);
        console.log("add users ");
        return res.redirect('/');
    }

});

app.get('/delet', (req, res) => {
    let id = req.query.id;
    // console.log(id);
    let d = users.filter(val => val.id != id);
    users = d;
    console.log("users ssucces..");
    return res.redirect('/');

})

app.get('/edit', (req, res) => {
    let single = users.find(val => val.id == req.query.id);

    return res.render('edit', {
        single
    })

})


app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;

    }
    console.log(`server is running :- ${port}`);

})

