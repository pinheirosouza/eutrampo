const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(__dirname + '/www/'));

// Send all requests to index.html
app.get('/*', function(req, res) {
    // res.json({
    //     success: true
    // })
  res.sendFile(path.join(__dirname + '/www/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor ligado.')
});