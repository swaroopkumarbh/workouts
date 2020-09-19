const express = require("express");
const mongoDb = require("mongodb");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
const mongoClient = mongoDb.MongoClient;
const url = "mongodb://localhost:27017";
var port = 3000;

app.post("/room", (request, response) => {
  mongoClient.connect(url, (error, connection) => {
    var db = connection.db("Hall");
    var cursor = db.collection("room").insertOne(request.body);
    cursor.then((value) => {
      response.json(value);
      connection.close();
    });
  });
});

app.post("/room-details", (request, response) => {
  mongoClient.connect(url, (err, connection) => {
    var db = connection.db("Hall");
    var cursor = db
      .collection("room_detail")
      .insertOne(request.body)
      .then((value) => {
        response.json(value);
        connection.close();
      });
  });
});

app.get("/room-details/:id/:name/:date/:starttime/:endtime", (request, response) => {
  mongoClient.connect(url, (error, connection) => {
    if(error) response.send("error");
    var db = connection.db("Hall");
    var cursor = db
      .collection("room_detail")
      .find({
        $and: [
          { room_id: parseInt(request.params.id) },
          { start_time: request.params.starttime },
          { date: request.params.date },
        ],
      })
      .count();
    cursor.then((value) => {
      if (value > 0) {
        response.json({
          message: "Sorry, Hall you are trying to book is not available.",
        });
        connection.close();
      } else {
        var data = db.collection("room_detail").insertOne({
          room_id: parseInt(request.params.id),
          customer_name: request.params.name,
          date: request.params.date,
          start_time: request.params.starttime,
          end_time: request.params.endtime,
          status: "booked",
        });
        data.then((value) => {
          response.json(value);
          connection.close();
        });
      }
    });
  });
});

app.get("/room-booking-history", (request, response) => {
  mongoClient.connect(url, (error, connection) => {
    var db = connection.db("Hall");
    var cursor = db
      .collection("room_detail")
      .aggregate([{ $sort: { room_id: 1 } }, { $project: { _id: 0 } }])
      .toArray();
    cursor.then((value) => {
      connection.close();
      response.json(value);
    });
  });
});
app.get("/customer-booking-history", (request, response) => {
  mongoClient.connect(url, (error, connection) => {
    var db = connection.db("Hall");
    var cursor = db
      .collection("room_detail")
      .aggregate([
        { $sort: { customer_name: 1 } },
        { $project: { _id: 0, status: 0 } },
      ])
      .toArray();
    cursor.then((value) => {
      console.log(value);
      response.json(value);
      connection.close();
    });
  });
});


app.listen(port);