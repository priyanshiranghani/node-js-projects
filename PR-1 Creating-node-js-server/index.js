const http = require('http');

const port = 9000;

const fs = require('fs');

const requestHandler = (req, res) => {
    // res.write("<h1>H?ello world</h1>");
    // res.end();


    let fileName = "";

    switch (req.url) {
        case '/':
            fileName = "./index.html"
            break;

        case '/home':
            fileName = "./home.html"
            break;

        case '/pr':
            fileName = "./product.html"
            break;

        case '/about':
            fileName = "./about.html"
            break;

        case '/con':
            fileName = "./contac.html"
            break;


    }

    fs.readFile(fileName, (err, data) => {
        if (err) {
            console.log(err);
            return false;

        }
        res.end(data);
    })

}

const server = http.createServer(requestHandler);


server.listen(port, (err) => {
    // console.log("server is running");

    if (err) {
        console.log(err);
        return false;

    }
    console.log(`server is running :- ${port}`);


})