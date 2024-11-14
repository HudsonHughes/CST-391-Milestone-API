import { Router } from "express";
import * as NotesController from "./notes.controller";

const router = Router();

router.get("/verses/:id/notes", NotesController.getNotesByVerse);
router.post("/verses/:id/notes", NotesController.createNote);
router.put("/verses/:id/notes/:noteId", NotesController.updateNote);
router.delete("/verses/:id/notes/:noteId", NotesController.deleteNote);
router.get("/notes", NotesController.getNotesByUserId);

export default router;
