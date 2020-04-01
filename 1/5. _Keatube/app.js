const express = require("express");
const app = express();

const fs = require('fs');

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())

app.use(express.static('public'));
app.use(express.static('videos'));


// SSR -  server side rendoring
const navbarPage = fs.readFileSync(__dirname + "/public/navbar/navbar.html","utf8");
const footerPage = fs.readFileSync(__dirname + "/public/footer/footer.html","utf8");

const frontPage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html","utf8");
const playerPage = fs.readFileSync(__dirname + "/public/player/player.html","utf8");
const uploadPage = fs.readFileSync(__dirname + "/public/upload/upload.html", "utf8");


app.get("/", (req, res) => {

    return res.send(navbarPage + frontPage + footerPage);
});
app.get("/player/:videoid", (req, res) => {

    return res.send(navbarPage + playerPage + footerPage); });

app.get("/upload", (req, res) => {
    return res.send(navbarPage + uploadPage + footerPage);
});

// Import routes
const videosRoute = require("./routes/videos");

// Setup routes
app.use(videosRoute);


const port = process.env.PORT ? process.env.PORT: 3000;

const server = app.listen(port, (error) => {
    if(error) {
        console.log("Error running the server");
    }
    else {
        console.log("Server is running on port", server.address().port);
    }
});