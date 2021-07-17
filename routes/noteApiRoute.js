const express = require('express');
const router = express.Router();
const path = require('path');

const fs = require('fs')

let noteDB = require('../db/db.json');
const { randomUUID } = require('crypto');


router.get('/notes', (req,res) =>  {
    res.send(noteDB);
})

router.post('/notes', (req,res) => {
    let newNote = req.body;
    newNote.id = randomUUID();
    noteDB.push(newNote);
    res.send(newNote);
});

router.delete('/notes/:id',(req,res) => {
    const id = req.params; //THIS IS GOOD DONT CHANGE
    let newNoteDB = noteDB;
    console.log('I am the new Note DB' + newNoteDB);

     console.log(newNoteDB.filter((note) => {
         newNoteDB = note.id !== '1';
     }))
    res.end();
});

module.exports = router;