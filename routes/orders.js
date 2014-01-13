//model details are in the /models folder
var models = require('../models/models.js');

// GET /order/new 
// show the order form (all the ingredients with checkboxes and then a submit button)
exports.newOrder = function(req, res) {
  models.Ingredient.find().exec(function (err, ingredients) {
    if (err) {
      console.log(err);
    }
    else {
        res.render('makeNewOrder', {ingredients:ingredients, thankYouForOrdering:""});
    }
  });
};

// POST /order/new
// submit the order; should now shown up on the pendingOrders page
exports.newOrder_post = function(req, res) {

    //get the post data, create the newly created order
    var newOrder = new models.Order({customerName: req.body.customerName, ingredients: req.body.desiredIngredients});

    //save the order
    newOrder.save(function(err) {
      if (err)
        console.log("Problem saving newOrder");
      else 
        console.log("Successfully saved newOrder!")
    });
};

// GET /orders
// shows a list of pending orders, includes "completed" button 
exports.pendingOrders = function(req, res) {
  //database query
  models.Order.find().populate('ingredients').exec(function(err, pendingOrdersList) {
    if (err) 
      console.log("error getting the list of pending orders")
    else
      console.log("successfully obtained list of pending orders")
      //use info from database query to render the list
      res.render('pendingOrders', {pendingOrdersList: pendingOrdersList});
  });
  
};

// POST /orders/completed
// click the completed buttons and the order will disappear from list
exports.pendingOrders_post = function(req, res) {
  var completedOrder_id = req.body.completedOrder_id;
  models.Order.remove({_id: completedOrder_id}, function(err) {
    if (err)
      console.log(err);
    else 
      console.log("posted!")
  });
};