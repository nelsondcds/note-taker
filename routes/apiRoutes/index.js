const { v4: uuidv4 } = require('uuid');
const { deleteById, createNewNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db');
const router = require('express').Router();


router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        console.log(results);
    }
    res.json(results);
});

router.delete('/notes/:id', (req, res) => {
	const result = deleteById(req.params.id, notes);
	res.json(result);
});

router.post('/notes', (req, res) => {
	req.body.id = uuidv4();

	if (!validateNote(req.body)) {
	  	res.status(400).send('The note is not properly formatted.');
	} else {
	    const note = createNewNote(req.body, notes);
	    res.json(note);
	}
});

module.exports = router;