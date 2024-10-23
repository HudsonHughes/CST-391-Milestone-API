import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Note } from "./notes.model";
import { noteQueries } from "./notes.queries";

export const getNotesByVerse = async (verseId: number): Promise<Note[]> => {
  return execute<Note[]>(noteQueries.getNotesByVerse, [verseId]);
};

export const createNote = async (note: Note): Promise<OkPacket> => {
  return execute<OkPacket>(noteQueries.createNote, [
    note.noteText,
    note.verseId,
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
