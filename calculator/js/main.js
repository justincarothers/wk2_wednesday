// ========== messing around with js plugins

// var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) +
var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256))


// ======== BACK END ===========

var addTheNumbers = function(num1, num2) {
  return num1 + num2
};



// ========= FRONT END ==================


$(document).ready(function() {

 spectrum();

 function spectrum(){
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    $('.colorbox').animate( { backgroundColor: hue }, 1000);
    spectrum();
 }

});

$(document).ready(function() {









  var favoriteColor = $("#color").val();

  $("button").click(function(event) {



    var num1=parseInt($("#firstNumber").val());
    var num2=parseInt($("#secondNumber").val());

    var result = addTheNumbers(num1, num2);
    alert(result);
    event.preventDefault();

  })




});
