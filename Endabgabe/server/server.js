"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndabgabeServer = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var EndabgabeServer;
(function (EndabgabeServer) {
    //URL für Datenbank
    let mongoUrl = "mongodb+srv://user:123456user@cluster0.umnh2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    console.log("Starting server on port:" + port);
    //Server erstellen
    let server = Http.createServer();
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        console.log("Hearing");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //URL parsen
        let url = Url.parse(_request.url, true);
        let jsonString = JSON.stringify(url.query);
        //let jsonString: string = JSON.stringify(url.query);
        //Jeweilige Funktion aufrufen
        if (url.pathname == "/getMemoryData") {
            getMemoryData(_response, mongoUrl);
        }
        if (url.pathname == "/addScore") {
            addScoreData(_response, jsonString, mongoUrl);
        }
        if (url.pathname == "/changeImage") {
            changeImage(_response, jsonString, mongoUrl);
        }
        if (url.pathname == "/getScoreData") {
            getScoreData(_response, mongoUrl).catch(console.dir);
        }
    }
    async function getMemoryData(_response, _mongoUrl) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_mongoUrl, options);
        await mongoClient.connect();
        //Datenbank und Collection auswählen
        let memoryData = mongoClient.db("Memory").collection("PictureData");
        //cursor auf die Datenbank legen und als Rückgabe ein OrderInformation(Interface!) Array erhalten
        let cursor = memoryData.find();
        let memoryCardArray = await cursor.toArray();
        let answer = JSON.stringify(memoryCardArray);
        _response.write(answer);
        _response.end();
    }
    async function changeImage(_response, _data, _mongoUrl) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_mongoUrl, options);
        await mongoClient.connect();
        let data = JSON.parse(_data);
        //Datenbank und Collection auswählen
        let memoryData = mongoClient.db("Memory").collection("PictureData");
        //Ein Feld updaten
        memoryData.updateOne({ "pairID": data.id }, { $set: { "pairID": data.id, "pictureUrl": data.input } }, { upsert: true });
        _response.write("changed");
        _response.end();
    }
    async function getScoreData(_response, _mongoUrl) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_mongoUrl, options);
        await mongoClient.connect();
        //Datenbank und Collection auswählen
        let scoreData = mongoClient.db("Memory").collection("ScoreData");
        let cursor = scoreData.find();
        let scoreArray = await cursor.toArray();
        let answer = JSON.stringify(scoreArray);
        _response.write(answer);
        _response.end();
    }
    //https://docs.mongodb.com/drivers/node/usage-examples/insertOne/
    async function addScoreData(_response, _data, _mongoUrl) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_mongoUrl, options);
        try {
            await mongoClient.connect();
            let data = JSON.parse(_data);
            //Datenbank und Collection auswählen
            let scoreData = mongoClient.db("Memory").collection("ScoreData");
            scoreData.insertOne(data);
            console.log("Database connection", scoreData != undefined);
            _response.write("added");
            _response.end();
        }
        finally {
            //await mongoClient.close();
        }
    }
})(EndabgabeServer = exports.EndabgabeServer || (exports.EndabgabeServer = {}));
//# sourceMappingURL=server.js.map