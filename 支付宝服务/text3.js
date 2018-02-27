'use strict'
$('#bottombutton1').click(function(){
    $("#home").css('display','block');
    $("#oneself").css('display','none');
    $("#topcenter").text('蚂蚁服务市场');
    $('#imgbutton1').attr('src','http://img4.imgtn.bdimg.com/it/u=2803620233,1906638381&fm=27&gp=0.jpg');
    $('#imgbutton2').attr('src','http://img0.imgtn.bdimg.com/it/u=3029476926,2775369202&fm=27&gp=0.jpg');
})
$('#bottombutton2').click(function(){
  $("#home").css('display','none');
  $("#oneself").css('display','block');
  $("#topcenter").text('我的');
  $("#imgbutton1").attr('src','http://img4.imgtn.bdimg.com/it/u=171723981,1346470513&fm=27&gp=0.jpg');
  $("#imgbutton2").attr('src','http://img2.imgtn.bdimg.com/it/u=874447518,4255720098&fm=27&gp=0.jpg');
})

$('#peggyhtml').click(function() {
  location.href = 'peggy.html';
})

$('.ordersbutton').click(function() {
  if($(this).attr('id') === 'myIndentright') {
    location.href = 'myorders.html?datanum=0';
  }
  if($(this).attr('class').indexOf('left') > 1) {
    location.href = 'myorders.html?datanum=1';
  }
  if($(this).attr('class').indexOf('right') > -1) {
    location.href = 'myorders.html?datanum=2';
  }
})

function getQuery(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}
if (getQuery("backstatepage") == 0) {
  $("#home").css('display','block');
  $("#oneself").css('display','none');
  $("#topcenter").text('蚂蚁服务市场');
}
if (getQuery("backstatepage") == 1) {
  $("#home").css('display','none');
  $("#oneself").css('display','block');
  $("#topcenter").text('我的');
}

