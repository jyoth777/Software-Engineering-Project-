const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 8000; //Line 3
const cors = require('cors')
const mongoose = require("mongoose");
const Router = require("./routes/routes")


app.use(express.json())
app.use(cors())
app.use(Router);


mongoose.connect('mongodb://localhost:27017/mydb',
  {
    useNewUrlParser: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

var incomingData={};
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

app.get('/', (req, res) => { //Line 9
   return res.get(req.body); //Line 10
  });
  
  // app.get('/login', (req, res) => { //Line 9
  //     return res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT login' }); //Line 10
  //   });

  //   app.post('/login', (req, res) => { //Line 9
  //     incomingData = req.body;
  // res.send(incomingData) //Line 10
  // });
  
  // app.get('/login', (req, res) => { //Line 9
  //     res.send(incomingData)
  //  });
  

//   app.post('/register', (req, res) => { //Line 9
//     incomingData = req.body;
// res.send(incomingData) //Line 10
// });

// app.get('/register', (req, res) => { //Line 9
//     res.send(incomingData)
//  });

// create a GET route
