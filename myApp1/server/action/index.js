var index = require('../model/index.js');
var util = require('../lib/util.js');

module.exports = function(req, res){
    res.render('myApp1/page/index.tpl', index.getData());
};

module.exports.test = function(req, res){
    res.render('myApp1/page/test.tpl');
    //res.redirect('../../myApp1/client/page/test.html');
};