import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Verse } from "./verses.model";
import { verseQueries } from "./verses.queries";

export const getAllVerses = async (): Promise<Verse[]> => {
  return execute<Verse[]>(verseQueries.getAllVerses, []);
};

export const getVersesByBook = async (book: string): Promise<Verse[]> => {
  return execute<Verse[]>(verseQueries.getVersesByBook, [book]);
};

export const getVersesByChapter = async (
  book: string,
  chapter: number
): Promise<Verse[]> => {
  return execute<Verse[]>(verseQueries.getVersesByChapter, [book, chapter]);
};

export const getVerseText = async (id: number): Promise<Verse | null> => {
  const rows = await execute<Verse[]>(verseQueries.getVerseText, [id]);
  return rows.length > 0 ? rows[0] : null;
};
