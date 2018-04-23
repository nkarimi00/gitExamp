const express = require('express');

const db = require('../models/intel')

const router = express.Router();

router.get('/cpu/intel/:year?', (req, res) => {

    const year = req.params.year || '';
    let qresult = [];

    if (year === '') {
        qresult = db;
    } else {
         qresult = db.filter((item) => {
            return (item.info.year === year);
        });
    }

        res.json(qresult);

    });
    module.exports = router;