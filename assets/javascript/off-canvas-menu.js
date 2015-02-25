
 /*$('#menu').click(function() {
	$(this).html("Hola!");

})*/ 

$("menu-link").click(function() {
  $("#menu").toggleclass("active");
  $(".container").toggleclass("active");
});