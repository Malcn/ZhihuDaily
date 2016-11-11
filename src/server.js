//实现一个api请求代理
var http = require('http');
var url = require('url');
var qs = require('querystring');
var port = 3057;

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'application/json; charset=UTF-8', 'Access-Control-Allow-Origin': '*' });
    var arg = url.parse(req.url).query;
    var str = qs.parse(arg);
    var opt = {
        host: str.host,
        method: req.method,
        path: str.url
    }
    var sreq = http.request(opt, function (sres) {
        console.log(res);
        sres.pipe(res);
        sres.on('end', function () {
            console.log('done');
        })
    });
    sreq.end();
})

server.listen(port, function () {
    console.log("server is running at port :%d ", port);
})

