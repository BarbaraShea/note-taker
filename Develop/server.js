// Dependencies

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data

const notes = []

// Starts server

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

// Routes

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

app.get('/api/notes', (req, res) => res.json(notes));

// Note Handler
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    console.log(newNote);
  
    notes.push(newNote);
    res.json(newNote);
  });
  