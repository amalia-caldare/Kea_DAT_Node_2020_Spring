const mongoClient = require("mongodb").MongoClient;

const connectionUrl = "mongodb://localhost:PORT:27017";
const dbName = "animalfarm";

mongoClient.connect(connectionUrl, {useUnifiedTopology: true}, (error, client) => {
    if(error) {
        throw "Error connecting to mongodb" + error;
    }
    const animalFarmDb = client.db(dbName);

    const buildings = animalFarmDb.collection('buildings');

    buildings.find({type: {$exists: true}}).limit(1).toArray((error, foundBuildings) => {
        console.log(foundBuildings);
        client.close();
    });
});

