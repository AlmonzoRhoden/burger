const express = require('express');

let app = express();

const PORT = process.env.PORT || 9090;

app.use(express.static('./public'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

let routes = require('./controllers/burgers_controller')

app.use(routes);

app.listen(PORT, function() {
    console.log("Listening on http://localhost:" + PORT)

});