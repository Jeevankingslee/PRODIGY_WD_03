const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
.then(async () => {

  await Product.deleteMany();

  await Product.insertMany([
    {
      name: "Milk",
      description: "Fresh Cow Milk",
      price: 60,
      image:"https://images.unsplash.com/photo-1550583724-b2692b85b150"
    },
    {
      name: "Bread",
      description: "Brown Bread",
      price: 40,
      image:"https://images.unsplash.com/photo-1509440159596-0249088772ff"
    },
    {
      name: "Eggs",
      description: "Farm Fresh Eggs",
      price: 90,
      image:"https://images.unsplash.com/photo-1518569656558-1f25e69d93d7"
    }
  ]);

  console.log("Products Added");
  process.exit();
});