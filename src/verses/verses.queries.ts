import {
  getAllVerses,
  getVersesByBook,
  getVersesByChapter,
  getVerseText,
  createVerse,
  deleteVerse,
  updateVerse,
} from "./verses.dao";

export const verseQueries = {
  getAllVerses: `SELECT * FROM verses`,
  getVersesByBook: `SELECT * FROM verses WHERE book = ?`,
  getVersesByChapter: `SELECT * FROM verses WHERE book = ? AND chapter = ?`,
  getVerseText: `SELECT * FROM verses WHERE id = ?`,
  createVerse: `INSERT INTO verses (verse_text, book, chapter, verse_number) VALUES (?, ?, ?, ?)`,
  updateVerse: `UPDATE verses SET verse_text = ?, book = ?, chapter = ?, verse_number = ? WHERE id = ?`,
  deleteVerse: `DELETE FROM verses WHERE id = ?`,
};
