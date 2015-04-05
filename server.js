var connect = require('connect'),
  http = require('http'),
  app;

app = connect()
  .use(connect.static('app'))
  .use('/js/lib/', connect.static('node_modules/requirejs/'))
  .use('/js/templates/', connect.static('app/js/templates/'))
  .use('/node_modules', connect.static('node_modules'));

http.createServer(app).listen(8080, function() {
  console.log('Running on http://localhost:8080');
});
