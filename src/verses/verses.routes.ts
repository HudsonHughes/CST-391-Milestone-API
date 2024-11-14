import { Router } from "express";
import * as VersesController from "./verses.controller";

const router = Router();

router.get("/verses", VersesController.getAllVerses);
router.get("/verses/books/:book", VersesController.getVersesByBook);
router.get(
  "/verses/books/:book/chapters/:chapter",
  VersesController.getVersesByChapter
);
router.get(
  "/verses/books/:book/chapters/:chapter/verses/:verse",
  VersesController.getVerseByReference
);
router.get("/verses/:id", VersesController.getVerseText);

export default router;
