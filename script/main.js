
function clickMenu(){
  $("#clickDiv").on("click", function(){
    //alert("Clicked");
    $("#headerClick").toggleClass("menu");
    $("#headerbar").toggleClass("menuShow");
    //$("#bumpreturn").toggleClass("bumpheader");
  });
}
//alert("loaded");
clickMenu();
