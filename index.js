//there will be the brain of our backend
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const Product = require("./models/product.model.js");
// req = request: it is whatever the client sends to the server
//res = responses : whatever responses comes back from the server
app.get("/", (req, res) => {
  res.send("Hello from Node API ! I am the builder, Jordan Builder");
});

app.get('/api/products', async (req, res)=>{
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
});
app.get('/api/product/:id', async (req, res)=>{
  try {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update a product 
app.put('/api/product/:id', async(req, res)=>{
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body);
    if (!product){
      return res.status(404).json({message: 'Product not found'});
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

mongoose
  .connect(
    "mongodb+srv://MeAdmin:Holyspirit99$@backenddb.9yf4hzi.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection Failed !");
  });
