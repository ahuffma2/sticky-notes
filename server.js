const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.json());


app.get('/api/notes', (req,res) => res.sendFile(path.join(__dirname, './db/db.json')));

app.get('/notes',(req,res) => res.sendFile(path.join(__dirname, './public/notes.html')));
app.get('*',(req,res) => res.sendFile(path.join(__dirname, './public/index.html')));

 app.post('/api/notes/:notes', (req,res) => {

 });

app.listen(PORT, () => console.log(`App listen on port ${PORT}`));