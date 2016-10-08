
require("myApp1:widget/js/jquery.js");
require("myApp1:widget/js/tip/jquery.poshytip.js");
var s =require.async("myApp1:static/js/customer/asyncTest.js");
//包装辅料信息 模板选择
$('#selMouldBtn').click(function(){
    $(this).poshytip();
    //module.exports.asyncClick();
});

alert(2);

