const express = require('express');
const router = express.Router();
const path = require('path');

const fs = require('fs')

let noteDB = require('../db/db.json');
const { randomUUID } = require('crypto');
const nodemon = require('nodemon');


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
    const id = req.params.id;

    //Returns a new array that includes all except for the object that has the same ID
    let newNoteList = noteDB
        .filter(note => {
           return note.id !== id;
        });

    noteDB = newNoteList;
    res.send(newNoteList);
});

module.exports = router;