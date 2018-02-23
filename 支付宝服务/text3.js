'use strict'
$('.bottombutton').onclick = function(index){
  if(index == 0) {
    $("#home").css('display','block');
    $("#oneself").css('display','none')
  } else { 
    $("#home").css('display','none');
    $("#oneself").css('display','block')
  }
}
    
