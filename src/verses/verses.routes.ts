import { Router } from "express";
import * as VersesController from "./verses.controller";

const router = Router();

router.get("/verses", VersesController.getAllVerses);
router.get("/verses/books/:book", VersesController.getVersesByBook);
router.get(
  "/verses/books/:book/chapters/:chapter",
  VersesController.getVersesByChapter
);
router.get("/verses/:id", VersesController.getVerseText);
router.post("/verses", VersesController.createVerse);
router.put("/verses/:id", VersesController.updateVerse);
router.delete("/verses/:id", VersesController.deleteVerse);

export default router;
