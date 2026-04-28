// const fs = require('fs');

//!readfile()
// ~ syntax = > fs.writefile('path','decoding_format(optional)',callback).
// ! Async
	// fs.readFile("demo.html", 'utf8', (err, data) => {
	// 	if (err) throw err;
    //     console.log(data)
    //     console.log("👍")
    // })



// ! fswritefile()

// ~ syntax = > fs.writefile('path','data',callback).
//? synchronus.

// console.log("start");
// fs.writeFileSync("demo.html",'i am new file');
// console.log("!done")
// console.log("end")

//! append file. async   ====> helps us to update afile if file is not present it will create a file.

// fs.appendFile("demo.html", "extra", (err) => {
//     if (err) throw err;
//     console.log("operation sucessfully")
// })
// console.log("end")

//! sync

// fs.appendFileSync("demo.html", "'sync content")
//     console.log("operation sucessfully👍")
// console.log("end")


//! unlink file   ===> it helps us to delete a file
// fs.unlink("demo.txt", (err) => {
//     if (err) throw err;
//     console.log("file deleted")
// })

//! sync
// fs.unlinkSync("demo.html")
// console.log("file deleted")

//! fs.rename(oldname, newname,callback).     ===> it helps us to rename a file.

// fs.rename("old.js",'new.js',(err)=>{
//     if(err) throw err
//     console.log("👍")
// })

// !fs.rename() sync


// try {
//     fs.renameSync("updateone", "update.js");
// } catch (err) {
//     console.log(err);
// }

// console.log("👍")


// ! mkdir.       ====> it helps us to create a new directory.  

// fs.mkdir("newFolder",(err)=>{
//     if(err) throw err;
//     console.log("file Created")
// })

// ! mkdirSync

// fs.mkdirSync("new")

// ! nested file created.
// ! 1.approach
// fs.mkdir("grand",(err)=>{
//     if(err) throw err
//     console.log("grant created!")
//     fs.mkdir("grand/parent",(err)=>{
//         if(err) throw err 
//         console.log("parent created!")
//         fs.mkdir("grand/parent/child",(err)=>{
//             if (err) throw err;
//                 console.log("child created!")
//         })
//     })
// })
// ~ or.
// ~ 2 approach ===> it is a special property use to handle the nested folder strusture
// fs.mkdir('grand/parent/child/siblings',{recursive:true},(err)=>{
//     if(err) throw err;
//     console.log("👍")
// })


//! fs.rmdir()    ===> only delete the empty folder 
// ?rm ()  modern way    ===> its only delete the files by default
// ! fs.rmdir()   === depricated

// fs.rmdir('newFolder',(err)=>{
//     if(err) throw err
//     console.log("👍")
// })


// !rm 
// fs.rm('newfolder',{recursive:true},(err)=>{
//     if(err) throw err
//     console.log("👍")}
// )


// ! stat.  ===> it helps us to provide details of folder

// fs.stat('demo.js',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })


// ! exist    ===> it helps us to check us to file exist or not
// let res = fs.existsSync('demo.js')
// console.log(res)

// ~ create the file and read that file and same data open in another file and save the data


	// fs.readFile("demo.html", 'utf8', (err, data) => {
	// 	if (err) throw err;

	// 	fs.writeFile("newFile", data, 'utf8', (err) => {
	// 		if (err) throw err;
	// 		console.log('Data copied and saved to target file.');
	// 	});
	// });



// ~ promises ******


let fs = require("fs/promises");

// async function reading(params) {
//     let data = await fs.readFile('demo.html',"utf-8")
//     console.log(data)
    
// }
// reading()

// ! or.

// (async()=>{
//     fs.writeFile("demo.html","hello")
//     console.log("👍")
// })();

// ! append file.

// (async()=>{
//     fs.readFile('demo.html','utf-8','hiii')
// })();

//! mk dir

// (async()=>{
//     fs.mkdir("new")
// })()



// ! rename.

//  (async()=>{
//     fs.rename('demo.html','demo1.html')
// })();
