const app = require("express")();

let devices = [
    { id: 1, type: "computer"}, 
    { id: 2, type: "smart watch"}
];


app.get("/", (req, res) => {
    return res.send({ about: "This is my device API vs. 0.0.1" });
});

app.get("/devices", (req, res) => {
    return res.send({ devices: devices });
});

app.get("/devices/:id", (req, res) => {
    const device = devices.find(device => device.id === Number(req.params.id));
    return res.send({ device: device });
});

app.post("/test", (req, res) => {
    console.log("test test test");
    res.send({});
})


const server = app.listen(3000, (error) => {
    if (error) {
        console.log("Error running the server");
    }
    console.log("Server is running on port", server.address().port);
});
