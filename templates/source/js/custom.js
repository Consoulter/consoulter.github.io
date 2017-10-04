/*var transparentDemo = true;
var fixedTop = false;

$(window).scroll(function(e) {
    oVal = ($(window).scrollTop() / 170);
    $(".blur").css("opacity", oVal);
    
});
*/

$('.switch-on').on('click',function(){
  $parent = $(this).parent().parent().parent().parent().parent().parent();
  $($parent).removeClass('ct-card--select')
})


$('.switch-off').on('click',function(){
  $parent = $(this).parent().parent().parent().parent().parent().parent();
  $($parent).addClass('ct-card--select')
})