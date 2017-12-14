//阻塞代码实例
var fs = require("fs");
// var data = fs.readFileSync('index.txt');
// console.log(data.toString());
// console.log('程序执行结束');
//非阻塞代码实例
fs.readFile('index.txt',function(err,data){
	if(err) 
		return console.log(err);
	console.log(data.toString());
})
console.log('程序执行结束');

//同步读文件，会阻塞代码，一步步执行，先读取文件结束再继续执行下去
//异步读文件不会阻塞代码，会在读取的同时执行接下来的代码，可以提升程序的性能
//因此，阻塞是按顺序执行的，而非阻塞是不需要按顺序的，所以如果需要处理回调函数的参数，我们就需要写在回调函数内