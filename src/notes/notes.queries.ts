import {
  createNote,
  deleteNote,
  getNotesByVerse,
  updateNote,
} from "./notes.dao";

export const noteQueries = {
  getNotesByVerse: `SELECT * FROM notes WHERE verseId = ?`,
  getNotesByUserId: `SELECT * FROM notes WHERE userId = ?`,
  createNote: `INSERT INTO notes (noteText, verseId, userId) VALUES (?, ?, ?)`,
  updateNote: `UPDATE notes SET noteText = ?, verseId = ? WHERE id = ?`,
  deleteNote: `DELETE FROM notes WHERE id = ?`,
};
