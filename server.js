var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );

app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );

var searchData = [];

app.listen( 4555, function(){
  console.log('server 4555');
});

app.get('/', function(req, res){
  console.log('URL hit');
  res.sendFile( path.resolve( 'view/index.html' ) );
});

app.post( '/math', function( req, res ){
  console.log( 'post hit to /allData: ', req.body );
  var x = req.body.number1;
  var y = req.body.number2;
  var number1 = parseInt(x);
  var number2 = parseInt(y);
  if (req.body.type.toLowerCase() == 'add' ){
    var resultOfAdd = {
      result: number1 + number2
    };
    console.log(resultOfAdd);
    res.send(resultOfAdd);
    }
  else if (req.body.type.toLowerCase() == 'sub' ){
    var resultOfAdd = {
      result: number1 - number2
    };
    console.log(resultOfAdd);
    res.send(resultOfAdd);
    }
  else if (req.body.type.toLowerCase() == 'mult' ){
    var resultOfAdd = {
      result: number1 * number2
    };
    console.log(resultOfAdd);
    res.send(resultOfAdd);
    }
  else if (req.body.type.toLowerCase() == 'div' ){
    var resultOfAdd = {
      result: number1 / number2
    };
    console.log(resultOfAdd);
    res.send(resultOfAdd);
    }
});
