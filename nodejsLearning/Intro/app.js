console.log("Hello world This is My First Node Js Program")



let fs = require("node:fs")
fs.writeFile('demo.txt','i am demo',(err)=>{
    if(err) throw err
})


console.log(this)
console.log(globalThis)