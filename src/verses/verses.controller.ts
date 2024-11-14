import { Request, RequestHandler, Response } from "express";
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

export const getVerseByReference: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { book, chapter, verse_number } = req.params;
    const verse = await VerseDao.getVerseByReference(book, Number(chapter), Number(verse_number));
    res.status(200).json(verse);
  } catch (error) {
    console.error("[verses.controller][getVerseByReference][Error] ", error);
    res.status(500).json({
      message: "There was an error when fetching verse by reference",
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