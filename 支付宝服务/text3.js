'use strict'
$('#bottombutton1').click(function(){
    $("#home").css('display','block');
    $("#oneself").css('display','none')
})
$('#bottombutton2').click(function(){
  $("#home").css('display','none');
  $("#oneself").css('display','block')
})

$('#peggyhtml').click(function() {
  location.href = 'peggy.html';
})