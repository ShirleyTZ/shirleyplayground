'use strict'
$('#topleftbutton').click(function() {
  location.href = 'text3.html?backstatepage=1';
})
function getQuery(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
if (getQuery("datanum") == 0) {
    $("#orderstate > div").eq(0).css("border-bottom","1px solid blue");
    $("#orderstate > div").eq(0).css("color","blue");
}
if (getQuery("datanum") == 1) {
    $("#orderstate > div").eq(1).css("border-bottom","1px solid blue");
    $("#orderstate > div").eq(1).css("color","blue")
}
if (getQuery("datanum") == 2) {
    $("#orderstate > div").eq(2).css("border-bottom","1px solid blue");
    $("#orderstate > div").eq(2).css("color","blue")
}

$('#orderstate > div').click(function() {
    $(this).css('color','blue');
    $(this).css('border-bottom','1px solid blue');
    $(this).siblings().css('color','black');
    $(this).siblings().css('border-bottom',"0px")
})