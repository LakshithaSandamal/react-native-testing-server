const Express = require("express")();
const Http = require("http").Server(Express);


Express.get('/',(req,res)=>{
    res.send("Hello boy");
});

Http.listen(3000);