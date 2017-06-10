$(document).ready(function(){
  // $("div:regex(class, .baloon-*)").function(
  //   console.log("??");
  // );
  $('[class*="baloon"]').each(function() {
    var val = $(this).attr('class').split('-');
    console.log();
    // var clsName = this.className.match(/\w*blue\w*/)[0];
});
});
