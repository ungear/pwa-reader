const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

const httpPort = 3002;
const server = app.listen(httpPort, function () {
  console.log(`visit http://localhost:${server.address().port}`);
});

