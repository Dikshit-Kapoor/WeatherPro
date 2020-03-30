var http=require('http'); //use http package
var url="https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22"; //enter url of an api 
var server=http.createServer(function(request,response){ 
   var request=require('request');
   request(url,function(err,res,body){
   	console.log(body);
    var data=JSON.parse(body);
    response.write("<html><body><div id='container'>"); 
    response.write("<h1>"+'Area-:'+data['coord']+'<br>'+"</h1>");  //show area of weather
    response.write("<h2>"+'Temperature-:'+data.main['temp']+'<br>'+"</h2>"); //show temperature of area
    response.write("<h2>"+'Sunset Time-:'+new Date(data.sys['sunset']+1000)+"</h2>"); //show the sunset of the time
    response.write("</div></body></html>");
    response.end();
   });

   

}).listen(8081); //local host 8081

