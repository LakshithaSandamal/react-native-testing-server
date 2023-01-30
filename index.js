const Express = require("express")();
const Http = require("http").Server(Express);


Express.get('/',(req,res)=>{
    res.send("Hello");
});

Http.listen(3000);