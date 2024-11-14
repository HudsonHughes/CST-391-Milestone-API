import { Request, RequestHandler, Response } from "express";
import { Note } from "./notes.model";
import * as NoteDao from "./notes.dao";
import { OkPacket } from "mysql";

export const getNotesByVerse: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const userId = req.query.userId ? Number(req.query.userId) : null; // Accept userId as a query parameter
    const notes = await NoteDao.getNotesByVerse(Number(id), userId);
    res.status(200).json(notes);
  } catch (error) {
    console.error("[notes.controller][getNotesByVerse][Error] ", error);
    res.status(500).json({
      message: "There was an error when fetching notes",
    });
  }
};


export const createNote: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const note: Note = req.body;
    const { id } = req.params;
    note.verseId = Number(id);
    const okPacket: OkPacket = await NoteDao.createNote(note);
    res.status(201).json(okPacket);
  } catch (error) {
    console.error("[notes.controller][createNote][Error] ", error);
    res.status(500).json({
      message: "There was an error when creating the note",
    });
  }
};

export const updateNote: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { id, noteId } = req.params;
    const note: Note = req.body;
    note.verseId = Number(id);
    const okPacket: OkPacket = await NoteDao.updateNote(Number(noteId), note);
    res.status(200).json(okPacket);
  } catch (error) {
    console.error("[notes.controller][updateNote][Error] ", error);
    res.status(500).json({
      message: "There was an error when updating the note",
    });
  }
};

export const deleteNote: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { noteId } = req.params;
    await NoteDao.deleteNote(Number(noteId));
    res.status(204).send(); // No content response for deletion
  } catch (error) {
    console.error("[notes.controller][deleteNote][Error] ", error);
    res.status(500).json({
      message: "There was an error when deleting the note",
    });
  }
};
