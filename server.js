const express = require('express');

// const path = require('path');  //MIGHT NOT NEED THIS
const uuid = require('uuid');
const fs = require('fs');

const htmlRoute = require('./routes/pageRoute');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.json());

app.use('/',htmlRoute);




// // app.get('*',(req,res) => res.sendFile(path.join(__dirname, './public/index.html')));
//  app.get('/api/notes/', (req,res) => res.sendFile.json(path.join(__dirname, './db/db.json')));


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

app.listen(PORT, () => console.log(`App listen on port ${PORT}`));