const express = require("express");
const userModel = require("../models/user");
const app = express();

app.post("/register", async (request, response) => {
    const user = new userModel(request.body);
  
    try {
      await user.save();
      response.send(user);
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