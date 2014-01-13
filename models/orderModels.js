//mongoose setup
var mongoose = require('mongoose');

//order schema
var orderSchema = mongoose.Schema({
    customerName: String,
    ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }]
});

//make the schema into a model
var Order = mongoose.model('Order', orderSchema);

//so we can use it in routes/ingredient.js , etc
module.exports = Order;