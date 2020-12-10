// Declaring variables

const express = require('express');
const router = express.Router();
const burgz = require('../models/burger.js');

// Get

router.get('/burger', function (req, res) {
    burgz.all(function (infoFromDatabase) {
        res.json({ allInfo: infoFromDatabase })
    })
});

// Post
router.post('/burger', function (req, res) {
    burgz.create(req.body.col, req.body.val, function (res) {
        console.log(res, "line19 of controller")
    })


    // console.log(req.body.col);
    // console.log(req.body.val)

});

// Put 
router.put("/burger/:id", function (req, res) {
    burgz.update(req.params.id, function (res) {
        console.log(res, "line31 controller")

    })
});

// Delete
router.delete("/burger/:id", function (req, res) {
    let cond = "id = " + req.params.id;
    burgz.delete(cond, function (res) {
        console.log(res)
    })

})

// Putting last so route is read correctly
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
})

// Exporting router code
module.exports = router;