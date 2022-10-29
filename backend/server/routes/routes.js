const express = require("express");

const userModel = require("../models/user");
const mongoose = require("mongoose");
const app = express();

// mongoose.connect('mongodb://localhost:27017/mydb',
//   {
//     useNewUrlParser: true
//   }
// );

// const db = mongoose.connection;

app.post("/register", async (request, response) => {
    const user = new userModel(request.body);
  
    try {
      await user.save();
      response.status(200).send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.post("/login", async (request, response) => {
  const user = await userModel.find({email: request.body["email"],password:request.body["password"]});
  console.log(user)
  try {
    response.status(200).send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/login", async (request, response) => {
  const user = request.body
  console.log(user)
  try {
    if (user!=NULL)
    response.status(200).send(user);
    else
    response.send("invalid user");
  } catch (error) {
    response.status(500).send(error);
  }
});

// shows the users in the db
// app.get("/register", async (request, response) => {
//     const users = await userModel.find({});
  
//     try {
//       response.send(users);
//     } catch (error) {
//       response.status(500).send(error);
//     }
//   });

  module.exports = app;