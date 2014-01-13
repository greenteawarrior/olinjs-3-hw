$(document).ready(function() {
  $(".completeButton").click(function() {
    $("li").remove("."+this.value)
    $.post("/orders/completed", {completedOrder_id: this.value}, function(response) {});
    return false;
  });
});