
function clickMenu(){
  $("#clickDiv").on("click", function(){
    //alert("Clicked");
    $("#headerClick").toggleClass("menu");
    $("#headerbar").toggleClass("menuShow");
  });
}
//alert("loaded");
clickMenu();
