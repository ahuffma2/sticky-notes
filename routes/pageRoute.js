const express = require('express');
const router = express.Router(); // Found this out from Express Docs used to load modular routes
const path = require('path');


router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;