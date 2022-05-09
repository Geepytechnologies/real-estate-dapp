const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('ver-success');
});

module.exports = router;