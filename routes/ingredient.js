//model details are in the /models folder
var models = require('../models/models.js');

// GET /ingredient/new (shows the user a form that allows them to enter a 
// new ingredient and its cost)
exports.new = function(req, res){
  console.log("hey thar get");
  res.render('ingredientForm',{});
};

// POST stuff that happens afer the user clicks submit on /ingredient/new
// saves the ingredient and its cost to the database ^_^
exports.create = function(req, res){
  //user typed in a new ingredient name and its cost
  newIngredientName = req.body.name;
  newIngredientCost = req.body.cost;

  //mongoose stuff for a new ingredient
  var newIngredient = new models.Ingredient({name: newIngredientName, cost: newIngredientCost});
  newIngredient.save(function (err) {
    if (err) 
      console.log("Problem saving newIngredient", err);
  })

  res.render('ingredientCreated', {newIngredientName:newIngredientName, 
                                   newIngredientCost:newIngredientCost});
};

