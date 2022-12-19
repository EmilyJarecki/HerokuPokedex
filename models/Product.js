const mongoose = require('mongoose');

//Blueprint on how our document within a collection should look!
const productSchema = new mongoose.Schema({
  name: {
   type: String,
   required: [true, "name can not be empty"], 
  },
  image: {
    type: String,
    required: [true, "image can not be empty"],
  }, 
  type: {
    type: [{}],
    required: [true, "image can not be empty"]
  },
  hp: {
    type: Number,
    required: [true, "hp can not be empty"]
  },
  attack: {
    type: Number,
    required: [true, "attack can not be empty"]
  },
  defense: {
    type: Number,
    required: [true, "defense can not be empty"]
  },
}, 
{
  timestamps: true 
// this will add a time stamp with the fields createdAt and updatedAt
});

//First argument of mongoose.model is database collection for the above model
//Product -> products within sub-database

//Second argument is defining the structure of the documents
//for this collection.
const Product = mongoose.model('Product', productSchema);
module.exports = Product