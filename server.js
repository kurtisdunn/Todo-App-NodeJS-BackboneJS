var express = require('express'),
	  app = express(),
    path = require('path'),
    http = require('http'),
		_ = require('underscore');
	
    app.set('port', process.env.PORT || 3000);
    app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());

app.use(express.static(__dirname + '/public')); 

// launch ======================================================================
http.createServer(app).listen(app.get('port'), function () {
    console.log("Todo App listening on > " + app.get('port'));
});
