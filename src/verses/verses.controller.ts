import { Request, RequestHandler, Response } from "express";
import { Verse } from "./verses.model";
import * as VerseDao from "./verses.dao";
import { OkPacket } from "mysql";

export const getAllVerses: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const verses = await VerseDao.getAllVerses();
    res.status(200).json(verses);
  } catch (error) {
    console.error("[verses.controller][getAllVerses][Error] ", error);
    res.status(500).json({
      message: "There was an error when fetching all verses",
    });
  }
};

export const getVersesByBook: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { book } = req.params;
    const verses = await VerseDao.getVersesByBook(book);
    res.status(200).json(verses);
  } catch (error) {
    console.error("[verses.controller][getVersesByBook][Error] ", error);
    res.status(500).json({
      message: "There was an error when fetching verses by book",
    });
  }
};

export const getVersesByChapter: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { book, chapter } = req.params;
    const verses = await VerseDao.getVersesByChapter(book, Number(chapter));
    res.status(200).json(verses);
  } catch (error) {
    console.error("[verses.controller][getVersesByChapter][Error] ", error);
    res.status(500).json({
      message: "There was an error when fetching verses by chapter",
    });
  }
};

export const getVerseText: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const verse = await VerseDao.getVerseText(Number(id));
    res.status(200).json(verse);
  } catch (error) {
    console.error("[verses.controller][getVerseText][Error] ", error);
    res.status(500).json({
      message: "There was an error when fetching the verse text",
    });
  }
};

export const createVerse: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const verse: Verse = req.body;
    const okPacket: OkPacket = await VerseDao.createVerse(verse);
    res.status(201).json(okPacket);
  } catch (error) {
    console.error("[verses.controller][createVerse][Error] ", error);
    res.status(500).json({
      message: "There was an error when creating the verse",
    });
  }
};

export const updateVerse: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const verse: Verse = req.body;
    const okPacket: OkPacket = await VerseDao.updateVerse(Number(id), verse);
    res.status(200).json(okPacket);
  } catch (error) {
    console.error("[verses.controller][updateVerse][Error] ", error);
    res.status(500).json({
      message: "There was an error when updating the verse",
    });
  }
};

export const deleteVerse: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    await VerseDao.deleteVerse(Number(id));
    res.status(204).send(); // No content response for deletion
  } catch (error) {
    console.error("[verses.controller][deleteVerse][Error] ", error);
    res.status(500).json({
      message: "There was an error when deleting the verse",
    });
  }
};
