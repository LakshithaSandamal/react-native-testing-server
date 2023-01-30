const Express = require("express")();
const Http = require("http").Server(Express);


Express.get('/',(req,res)=>{
    res.json({
        name:"Lakshita"
    })
});

Http.listen(3000);