$(document).ready(function(){

  $("button").click(function(event){

    var wishInput = $("input#wish").val().toUpperCase();

    alert("You get a "+ wishInput);

    event.preventDefault();

  });


});
