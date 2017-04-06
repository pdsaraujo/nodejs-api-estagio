var express = require('express');
var app = express();
var fs = require("fs");

app.get('/:name', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      users = JSON.parse(data);
      var user = users[req.params.name]
      if (user === undefined) {
        console.log(user)
        res.end(JSON.stringify("undefined"))
      }
      else {
      console.log( user );
      res.end (JSON.stringify(user))};
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log(" app listening at http://%s:%s", host, port)

})
