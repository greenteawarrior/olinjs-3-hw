$(document).ready(function() {
  $("#ingredientForm").on("submit", function() {
    $('h3').append('Thanks for ordering!');
    $.post("/order/new", {customerName: this.customerName, ingredients: this.desiredIngredients}, function(response) {});
    return false;
  });
});