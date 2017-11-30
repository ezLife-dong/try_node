var http = require("http");
var express = require("express");
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('hello node!\n');
	// response.end(express);
}).listen(8888);
console.log('Server is running at http://127.0.0.1:8888！/');
// console.log(express);
// var ass = document.createTextNode('abs');
// document.body.appendChild(ass);