var connect = require('connect'),
  http = require('http'),
  app;
var port = process.env.PORT || 8080;

app = connect()
  .use(connect.static('app'))
  .use('/js/lib/', connect.static('node_modules/requirejs/'))
  .use('/js/templates/', connect.static('app/js/templates/'))
  .use('/node_modules', connect.static('node_modules'));

http.createServer(app).listen(port, function () {
  console.log('Running on http://localhost:' + port);   // eslint-disable-line no-console
});
