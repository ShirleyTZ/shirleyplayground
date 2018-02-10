'use strict'
function show(index) {
  for(var i = 0;i <$('.imgbotton').length; i++) {
    if(index == 0) {
      $("#home").css('display','block');
      $("#oneself").css('display','none')
    } else { 
      $("#home").css('display','none');
      $("#oneself").css('display','block')
    }
  }
} 

function imgclick() {
    for (var i = 0; i<$('.imgbotton').length; i++){
        $('.imgbotton').eq(i).onclick = function() {
            show(i);
            return false;
        }
    }
}
