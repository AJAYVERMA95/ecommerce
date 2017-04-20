var app = require('./app.js');
var port = app.get('port');
app.listen(port,function(){
    console.log("listening to "+port);
});