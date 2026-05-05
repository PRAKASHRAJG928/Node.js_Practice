const fs = require('fs');

const readStream = fs.createReadStream('./Hugefile.txt');

readStream.on('data', (buffer)=>{
    console.log('new Buffer');
    console.log(buffer.toString());

})