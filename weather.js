var http=require('http');
var url="https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22";
var server=http.createServer(function(request,response){
   var request=require('request');
   request(url,function(err,res,body){
   	console.log(body);
    var data=JSON.parse(body);
    response.write("<html><body><div id='container'>");
    response.write("<h1>"+'Area-:'+data['coord']+'<br>'+"</h1>");
    response.write("<h2>"+'Temperature-:'+data.main['temp']+'<br>'+"</h2>");
    response.write("<h2>"+'Sunset Time-:'+new Date(data.sys['sunset']+1000)+"</h2>");
    response.write("</div></body></html>");
    response.end();
   });

   

}).listen(8081);

