'use strict'
$('#topleftbutton').click(function() {
    history.back();
})
function getQuery(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
if (getQuery("datanum") == 0) {
    $("#orderstate > div").eq(0).css("border-bottom","1px solid blue")
}
if (getQuery("datanum") == 1) {
    $("#orderstate > div").eq(1).css("border-bottom","1px solid blue")
}
if (getQuery("datanum") == 2) {
    $("#orderstate > div").eq(2).css("border-bottom","1px solid blue")
}
