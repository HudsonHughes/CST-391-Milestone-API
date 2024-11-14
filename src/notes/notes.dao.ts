import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Note } from "./notes.model";
import { noteQueries } from "./notes.queries";

export const getNotesByVerse = async (verseId: number, userId: number | null): Promise<Note[]> => {
  let query = noteQueries.getNotesByVerse;
  const params = [verseId];

  // Add userId to the query if provided
  if (userId !== null) {
    query += ` AND userId = ?`;
    params.push(userId);
  }

  return execute<Note[]>(query, params);
};

// Fetch notes by userId
export const getNotesByUserId = async (userId: number | null): Promise<Note[]> => {
  return execute<Note[]>(noteQueries.getNotesByUserId, [userId]); // Execute query to fetch notes by userId
};

export const createNote = async (note: Note): Promise<OkPacket> => {
  return execute<OkPacket>(noteQueries.createNote, [
    note.noteText,
    note.verseId,
    note.userId, // Include userId when creating a note
  ]);
};

export const updateNote = async (id: number, note: Note): Promise<OkPacket> => {
  return execute<OkPacket>(noteQueries.updateNote, [
    note.noteText,
    note.verseId,
    id,
  ]);
};

export const deleteNote = async (id: number): Promise<OkPacket> => {
  return execute<OkPacket>(noteQueries.deleteNote, [id]);
};
