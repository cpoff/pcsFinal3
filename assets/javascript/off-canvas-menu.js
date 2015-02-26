
 /*$('#clickable').click(function() {
	$(this).html("Hola!");

})*/ 

/* JavaScript code tutorial from Tom Rich
@ http://blog.tomri.ch/super-simple-off-canvas-menu-navigation/ */

$(".menu-button").click(function() {
  $("#menu").toggleClass("active");
  $("#container").toggleClass("active");
  $("#header").toggleClass("active");

  console.log("yay");
});