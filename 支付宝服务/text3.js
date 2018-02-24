'use strict'
$('#bottombutton1').click(function(){
    $("#home").css('display','block');
    $("#oneself").css('display','none');
    $("#topcenter").text('蚂蚁服务市场');
})
$('#bottombutton2').click(function(){
  $("#home").css('display','none');
  $("#oneself").css('display','block');
  $("#topcenter").text('我的');
})

$('#peggyhtml').click(function() {
  location.href = 'peggy.html';
})
$('.ordersbutton').click(function() {
  var ordernum = $(this).index();
  if(ordernum == 0) {
    location.href = 'myorders.html?datanum=0';
  }
  if(ordernum == 1) {
    location.href = 'myorders.html?datanum=1';
  }
  if(ordernum == 2) {
    location.href = 'myorders.html?datanum=2';
  }
})
  