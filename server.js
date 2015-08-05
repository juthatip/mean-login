var express = require('express'),
    app     = express();

app.use(express.static('./public'));
app.get('*', function(req, res) {
    res.sendfile('public/main.html');
});
app.listen(3000);
