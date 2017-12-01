var net = require('net');
var PORT = 8888;
var HOST = '127.0.0.1';
var chatServer = net.createServer();
chatServer.on('connection',function(client){
    console.log('服务端：收到来自客户端的请求');
    client.on('data',function(data){
	console.log('服务端：收到来自客户端的请求,内容为{'+data+'}');
	// 给客户端返回数据
        client.write('你好，我是服务端');
    })
     client.on('close', function(){
         console.log('服务端：客户端连接断开');
    });
})
chatServer.listen(PORT, HOST, function(){
    console.log('服务端：开始监听来自客户端的请求');
});