var request = require('request')
var fs = require('fs')

console.log('downloading image')
request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function(err){
    console.log('there was an error')
    throw err
  })
  .on('response', function(response){
    console.log('this is the response code: ' + response.statusCode);
    console.log('this is the status message: ' + response.statusMessage);
    console.log('this is the content type: ' + response.headers['content-type'])
    console.log('download complete')
  })
  .on('end', function(){
  console.log('end of stream')
  })
  .pipe(fs.createWriteStream('./future.jpg'))
