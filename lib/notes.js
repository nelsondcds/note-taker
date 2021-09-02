const fs = require("fs");
const path = require("path");

function deleteById(id, notesArray) {
	const result = notesArray.filter(note => note.id != id);
    fs.writeFileSync(
		path.join(__dirname, '../db/db.json'),
		JSON.stringify({ notes: result }, null, 2)
	);
	return result;
}

function createNewNote(body, notesArray) {
	const note = body;
	notesArray.push(note);
	fs.writeFileSync(
		path.join(__dirname, '../db/db.json'),
		JSON.stringify({ notes: notesArray }, null, 2)
	);
	return note;
}

function validateNote(note) {
	if (!note.title || typeof note.title !== 'string') {
	  	return false;
	}
	if (!note.text || typeof note.text !== 'string') {
	  	return false;
	}
	return true;
}

module.exports = {
    deleteById,
    createNewNote,
    validateNote
};
