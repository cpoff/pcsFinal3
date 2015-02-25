
 /*$('#clickable').click(function() {
	$(this).html("Hola!");

})*/ 

$(".menu-button").click(function() {
  $("#menu").toggleClass("active");
  $("#container").toggleClass("active");
  $("#header").toggleClass("active");
  console.log("yay");
});