var index = require('./action/index.js');
module.exports = function(router){
   router.get('/',function(req, res){
       console.log('aa');
        index.test(req, res);
   });
};