var mysql   = require("mysql");

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes = function(router,connection,md5) {
    var self = this;
    router.get("/",function(req,res){
        res.json({"Message" : "Hello World !"});
    });

   
}

module.exports = REST_ROUTER;
