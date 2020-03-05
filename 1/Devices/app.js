const express = require("express");
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())


let devices = [
    { id: 1, type: "computer"}, 
    { id: 2, type: "smart watch"}
];

let nextDeviceId = 3;

app.get("/", (req, res) => {
    return res.send({ response: "This is my device API vs. 0.0.1" });
});

app.get("/devices", (req, res) => {
    return res.send({ response: devices });
});

app.get("/devices/:id", (req, res) => {
    const device = devices.find(device => device.id === Number(req.params.id));
    return res.send({ response: device });
});
/*
app.post("/test", (req, res) => {
    console.log(req.body);
    res.send({});
})

app.post("/test2", (req, res) => {
    console.log(req.body);
    res.send({"body": req.body});
})
*/

//post request and unique id
app.post("/devices", (req, res) => {
    let newDevice = req.body;
    if(!newDevice.type) {
        return res.status(400).send({response: "Missing devices type"});
    }
    newDevice.id = nextDeviceId++;
    devices.push(newDevice);

    console.log(devices);
   return res.send({response: newDevice}); 
   
});

//put request
app.put("/devices/:id", (req, res) => {
    const device = devices.find(device => device.id === Number(req.params.id));
    let updatedDevice = req.body;

    if(!updatedDevice.type) {
        return res.status(400).send({response: "Missing devices type"});
    }

   // updatedDevice.id = device.id;
    devices[device.id - 1].type = updatedDevice.type;

    return res.send({response: updatedDevice});
});

app.delete("/devices/:id", (req,res) => {
    
    const newDevices = devices.filter(device => device.id !== Number(req.params.id));
    
    devices = newDevices;

    return res.send({response: newDevices});
});

const server = app.listen(3000, (error) => {
    if (error) {
        console.log("Error running the server");
    }
    console.log("Server is running on port", server.address().port);
});
