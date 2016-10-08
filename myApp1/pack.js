/**
 * 加载pack.json数据 提供页面静态资源 供fis-config.js打包调用
 * @type {{}}
 */
var packJson = {};
packJson.url = "./pack.json";
//获取不想打包的文件
packJson.notPack = fis.config.get('notPack');
//加载pack.json数据
packJson.load = function(){
    var data = require(packJson.url);
    return packJson.processData(data);
}
//加工pack.json数据  去除路径开头的'/'
packJson.processData = function(data){
    var retData = {},val,rVal;
    if(data){
        for(var key in data){
            var rArray=[];
            val = data[key];
            for(var i=0;i<val.length;i++){
                rVal = val[i].replace(/^\//,"");
                if(!packJson.notPack[rVal]){
                    rArray.push(rVal);
                }
            }
            retData[key]=rArray;
        }
    }
    return retData;
}
//接口
module.exports = packJson.load();


