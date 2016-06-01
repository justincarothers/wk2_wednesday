var add = function(num1, num2) {
  return num1 + num2
};

$(document).ready(function() {

  $("button").click(function(event) {

    event.preventDefault();

    var num1=parseInt($("#firstNumber").val());
    var num2=parseInt($("#secondNumber").val());

    var result = add(num1, num2);
    alert(result);

  })

});
