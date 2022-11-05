const express = require("express");

const userModel = require("../models/user");
const mongoose = require("mongoose");
const app = express();

app.post("/register", async (request, response) => {
  console.log(request.body)
    const finduser = await userModel.find({email: request.body["email"]});
    const reply = {success:0}
    console.log(finduser)
    if(finduser.length!=0){
      //If user credentials are already taken
      reply["message"]="User already exists";
      response.status(200).send(reply)
    }
    else{
    const user = new userModel(request.body);
  
    try {
      await user.save();
      reply["success"]=1;
      reply["message"]="User registered";
      reply["user"]=user;
      response.status(200).send(reply);
    } catch (error) {
      reply["success"]=0;
      reply["message"]=error;
      response.status(500).send(reply);
    }}
});

app.post("/login", async (request, response) => {
  
  try {
    const user = await userModel.find({email: request.body["email"],password:request.body["password"]});
    console.log(user)
    response.status(200).send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

// app.get("/login", async (request, response) => {
//   const user = request.body
//   console.log(user)
//   try {
//     if (user!=NULL)
//     response.status(200).send(user);
//     else
//     response.send("invalid user");
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

// app.get("/register", async (request, response) => {
//   const user = request.body
//   console.log(user)
//   try {
//     if (user!=NULL)
//     response.status(200).send(user);
//     else
//     response.send("invalid user");
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

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