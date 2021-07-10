import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace EndabgabeServer {
    interface MemoryCard {
        pairID: string;
        pictureUrl: string;
    }
    interface ImageInformation {
        input: string;
        id: number;
    }

    interface UserData {
        name: string;
        duration: string;
        date: string;
    }


    //URL für Datenbank
    let mongoUrl: string = "mongodb+srv://user:123456user@cluster0.umnh2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;
    console.log("Starting server on port:" + port);
    //Server erstellen
    let server: Http.Server = Http.createServer();
    server.listen(port);
    server.addListener("request", handleRequest);

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("Hearing");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //URL parsen
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        let jsonString: string = JSON.stringify(url.query);
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

    async function getMemoryData(_response: Http.ServerResponse, _mongoUrl: string): Promise <void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_mongoUrl, options);
        await mongoClient.connect();
        //Datenbank und Collection auswählen
        let memoryData: Mongo.Collection = mongoClient.db("Memory").collection("PictureData");
        //cursor auf die Datenbank legen und als Rückgabe ein OrderInformation(Interface!) Array erhalten
        let cursor: Mongo.Cursor = memoryData.find();
        let memoryCardArray: MemoryCard [] = await cursor.toArray();
        let answer: string = JSON.stringify(memoryCardArray);
        _response.write(answer);
        _response.end();
    }

    async function changeImage(_response: Http.ServerResponse, _data: string , _mongoUrl: string): Promise <void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_mongoUrl, options);
        await mongoClient.connect();
        let data: ImageInformation = JSON.parse(_data);
        //Datenbank und Collection auswählen
        let memoryData: Mongo.Collection = mongoClient.db("Memory").collection("PictureData");
        //Ein Feld updaten
        memoryData.updateOne({"pairID": data.id}, {$set: {"pairID": data.id, "pictureUrl": data.input}}, { upsert: true });

        _response.write("changed");
        _response.end();
    }
    async function getScoreData(_response: Http.ServerResponse, _mongoUrl: string): Promise <void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_mongoUrl, options);
        await mongoClient.connect();
        //Datenbank und Collection auswählen
        let scoreData: Mongo.Collection = mongoClient.db("Memory").collection("ScoreData");
        let cursor: Mongo.Cursor = scoreData.find();
        let scoreArray: UserData [] = await cursor.toArray();
        let answer: string = JSON.stringify(scoreArray);
        _response.write(answer);
        _response.end();
    }
    //https://docs.mongodb.com/drivers/node/usage-examples/insertOne/
    async function addScoreData(_response: Http.ServerResponse, _data: string, _mongoUrl: string): Promise <void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_mongoUrl, options);
        try {
            await mongoClient.connect();
            let data: UserData = JSON.parse(_data);
            //Datenbank und Collection auswählen
            let scoreData: Mongo.Collection = mongoClient.db("Memory").collection("ScoreData");
            
            scoreData.insertOne(data);
            console.log("Database connection", scoreData != undefined);  

            _response.write("added");
            _response.end();
        }
        finally {
            //await mongoClient.close();
        }
    }
}