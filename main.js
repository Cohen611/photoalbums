$(document).ready(function(){
$(".album").hide();
  $(document).on("click", ".albumlink", function(){
var album = $(this).attr("id");
$("#"+album+"Container").show();
$(".cover-box").hide();

  });
  $(document).on("click", ".goback", function(){
$(".cover-box").show();
$(".album").hide();
});
$(document).on("click", ".goback", function(){
$(".album").hide();
$("a href").show();
});
});
