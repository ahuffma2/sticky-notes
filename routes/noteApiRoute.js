const express = require('express');
const router = express.Router();

const path = require('path');
const uuid = require('uuid');


const fs = require('fs');
let notes;

// var obj;
// fs.readFile('file', 'utf8', function (err, data) {
//   if (err) throw err;
//   obj = JSON.parse(data);
// });


// Read the file and send to the callback


// Write the callback function
function handleFile(err, notes) {
    if (err) throw err
    notes = JSON.parse(notes)
    console.log(notes);
    return notes;
}

router.get('/notes', (req,res,) => {
    console.log('I am getting notes...');
    fs.readFile(path.join(__dirname,'../db/db.json'), handleFile)
   // console.log(;
    res.end;
});

// getNoteFile = () => {
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