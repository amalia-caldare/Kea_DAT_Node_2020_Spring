const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())


app.use(express.static('public'));
app.use(express.static('videos'));

app.get("/video/:videoid", (req, res) => {

    return res.sendFile(__dirname + '/public/video.html');
});



const port = process.env.PORT ? process.env.PORT: 3000;

const server = app.listen(port, (error) => {
    if(error) {
        console.log("Error running the server");
    }
    else {
        console.log("Server is running on port", server.address().port);
    }
});