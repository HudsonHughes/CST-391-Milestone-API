import {
  createNote,
  deleteNote,
  getNotesByVerse,
  updateNote,
} from "./notes.dao";

export const noteQueries = {
  getNotesByVerse: `SELECT * FROM notes WHERE verseId = ?`,
  createNote: `INSERT INTO notes (noteText, verseId) VALUES (?, ?)`,
  updateNote: `UPDATE notes SET noteText = ?, verseId = ? WHERE id = ?`,
  deleteNote: `DELETE FROM notes WHERE id = ?`,
};
