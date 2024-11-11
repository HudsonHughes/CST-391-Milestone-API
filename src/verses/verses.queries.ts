import {
  getAllVerses,
  getVersesByBook,
  getVersesByChapter,
  getVerseText
} from "./verses.dao";

export const verseQueries = {
  getAllVerses: `SELECT * FROM verses`,
  getVersesByBook: `SELECT * FROM verses WHERE book = ?`,
  getVersesByChapter: `SELECT * FROM verses WHERE book = ? AND chapter = ?`,
  getVerseText: `SELECT * FROM verses WHERE id = ?`
};
