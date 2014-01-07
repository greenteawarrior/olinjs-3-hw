//mongoose setup
var mongoose = require('mongoose');

//connecting! to either local or heroku config var thing
mongoose.connect('mongodb://localhost/burgers')

//ingredient schema
var ingredientSchema = mongoose.Schema({
    name: String,
    cost: Number,
});

//make the schema into a model
var Ingredient = mongoose.model('Ingredient', ingredientSchema);

//so we can use it in routes/ingredient.js , etc
module.exports = Ingredient;