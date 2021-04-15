// Dependencies
// var uniqid = require('uniqid');
const express = require('express');
const path = require('path');
let data = require('./db/db.json');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))


//Routes

app.get('/api/notes', (req, res) => res.json(data));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.use(express.static('public'))

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));


// Note Handler
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    console.log(newNote);
  
    data.push(newNote);
    res.json(newNote);
  });
  

// Starts server

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));




