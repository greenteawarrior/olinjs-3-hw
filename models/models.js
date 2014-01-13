//mongoose setup
var mongoose = require('mongoose');

//ingredient schema
var ingredientSchema = mongoose.Schema({
    name: String,
    cost: Number,
});

//order schema
var orderSchema = mongoose.Schema({
    customerName: String,
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }]
});


//make the schemas into models
var Ingredient = mongoose.model('Ingredient', ingredientSchema);
var Order = mongoose.model('Order', orderSchema);

//so we can use it in routes , etc
exports.Ingredient = Ingredient;
exports.Order = Order;