// Dependencies
const generateUniqueId = require('generate-unique-id');
const express = require('express');
const path = require('path');
let data = require('./db/db.json');
var compression = require('compression')


// Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
app.use(compression());

//Routes
app.get('/notes', (req, res) => {
    console.log('PATH HIT!');
    res.sendFile(path.join(__dirname, '/public/notes.html'))
  });

app.get('/api/notes', (req, res) => res.json(data));


app.get('*', (req, res) => {
    console.log('INDEX.HTML PATH HIT!');
    res.sendFile(path.join(__dirname, '/public/index.html'))
  });


// POST 
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    const id = generateUniqueId();
    newNote.id = id;
    data.push(newNote);
    res.json(newNote);
  });
  

//DELETE
app.delete('/api/notes/:id', (req, res) => {
  for (let i = 0; i < data.length; i++) {

    if (data[i].id == req.params.id) {
        data.splice(i, 1);
        break;
    }
};     

res.sendFile(path.join(__dirname, '/public/notes.html'))

});

// Starts server

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));




