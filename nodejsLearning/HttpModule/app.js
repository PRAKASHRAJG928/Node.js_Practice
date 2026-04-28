// !http module to create a custom web server.

let http = require("http");
const { type } = require("os");
// console.log(http);

let server = http.createServer((req,res)=>{
    // console.log(res);
    // console.log(req);
// ~ method in request.
//! 1 method.
// console.log(req.method);


// ! 2. req.url
// console.log(req.url);

//! 3. req.headers    infromation everything in the server 
// console.log(req.headers);

req.setHeader('content-type','text/plain')
// ~ method in response.

// ! 1. res.statuscode.
res.statusCode = 404
// ! 2.res.ststusmessage.
res.statusMessage = "operation sucessfully"

res.end()
})

server.listen(2000,(err)=>{
    if(err) throw err
    console.log("Server Running!")
});




