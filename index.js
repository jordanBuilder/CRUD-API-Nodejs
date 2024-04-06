//there will be the brain of our backend
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// req = request: it is whatever the client sends to the server
//res = responses : whatever responses comes back from the server
app.get("/", (req, res) => {
  res.send("Hello from Node API ! I am the builder, Jordan Builder");
});

mongoose
  .connect(
    "mongodb+srv://MeAdmin:Holyspirit99$@backenddb.9yf4hzi.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {console.log("Connected to database!");
  app.listen(3000,()=>{
    console.log("server is running on port 3000");
  });
})
  .catch(() => {
    console.log("connection Failed !");
  });


