// Server.js

const express = require('express');

let app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));
let routes = require('./controllers/burgers_controller')

app.use(routes);

app.listen(PORT, function() {
    console.log("Listening on http://localhost:" + PORT)

});