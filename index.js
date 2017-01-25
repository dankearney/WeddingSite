var express = require('express');
var path	  = require('path')
var app     = express();


app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function(req, resp) {
  resp.render('splash');
});

app.get('/the-wedding-party', function(req, resp) {
  resp.render('the-wedding-party')
})

app.get('/wedding-details', function(req, resp) {
  resp.render('wedding-details')
})

app.get('/gift-registry', function(req, resp) {
  resp.render('gift-registry')
})

app.get('/local-attractions', function(req, resp) {
  resp.render('local-attractions')
})

app.get('*', function(req, resp) {
  resp.redirect('/')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

module.exports = app;
