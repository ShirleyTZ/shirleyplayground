'use strict'
$('.item1').click(function() {
  var p = $(this).index(); 
  $(this).css('border-bottom','3px solid blue');
  $(this).siblings().css('border-bottom','0px'); 
  $(this).css('color','#0E62CF');
  $(this).siblings().css('color','black'); 
  $('.item1img').eq(p).css('display','block');
  $('.item1img').eq(p).siblings().css('display','none');
})

$('#topleftbutton').click(function() {
  history.back();
})
  
