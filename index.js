const express = require('express')
const app = express()

var port = 3000;

try{
   var tempPort = parseInt(process.argv[ process.argv.length - 1 ]);
   if( tempPort >= port ){
   	 port = tempPort;
   }else{
   	 console.log("The port should be higher than " + port );
   }
}catch(e){
	console.log("You can specify the port in argument");
	console.log( e )
}

app.get('/', (req, res) => {
  res.send('Welcome to the root (port ' + port + ")");
})


app.get('/hello', (req, res) => {
  res.send('Hello from the hello route (port ' + port + ")" );
})


app.listen(port, () => console.log('Server running on port ' + port ))