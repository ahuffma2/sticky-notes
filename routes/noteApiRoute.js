const express = require('express');
const router = express.Router();
const path = require('path');

const fs = require('fs')

const noteDB = require('../db/db.json');
const { randomUUID } = require('crypto');


router.get('/notes', (req,res) =>  {
    res.send(noteDB);
})

router.post('/notes', (req,res) => {

    
    // If you want the file to be valid JSON, you have to open your file, parse the JSON, 
    // append your new result to the array, 
    // transform it back into a string and save it again.
    let newNote = req.body;
    newNote.id = randomUUID();
    noteDB.push(newNote);
    res.send(newNote);
});

// router.delete('/notes:id',(req,res) => {
//     const id = req.params;
//     console.log(id);
//     res.end();
// });


//CRUD FUNCTIONALITY

// Write the callback function
// function handleFile(err, notes) {
//     if (err) throw err
    
//     console.log(notes);
//     let noteList = [];
//     noteList.concat(JSON.parse(notes));
//     return noteList;
// }


// getNoteFile = () => 
//     JSON.parse(fs.readFileSync('../db/db.json','utf8'));
// }
// router.post('./api/notes',(req,res) => res.send)



//   app.post('/api/notes', (req,res) => {
//      const newNote = req.body;

//     //NEED TO SET A newNote ID IF I WANT TO DELETE
//      console.log(`I want to add the note ${JSON.stringify(newNote)}`);
//      addNote(JSON.stringify(newNote));
//    //   res.json());
//  });

//  function addNote (note) {
//     fs.writeFile('./db/db.json',note, (err) => 
//     err ? console.log(err) : console.log('Success!')
//   );
//  }

module.exports = router;