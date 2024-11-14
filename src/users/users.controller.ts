// users.controller.ts
import { Request, RequestHandler, Response } from "express";
import { User } from "./users.model";
import * as UserDao from "./users.dao";
import bcrypt from "bcryptjs";
import { OkPacket } from "mysql";

// Register a new user
export const registerUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const user: User = req.body;
    user.password = await bcrypt.hash(user.password, 10);

    const okPacket: OkPacket = await UserDao.createUser(user);
    res.status(201).json(okPacket);
  } catch (error) {
    console.error("[users.controller][registerUser][Error] ", error);
    res.status(500).json({
      message: "There was an error when registering the user",
    });
  }
};

// Login a user
export const loginUser: RequestHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { username, password } = req.body;

    const users = await UserDao.getUserByUsername(username);
    if (users.length === 0) {
      res.status(401).json({ message: "Invalid username or password" });
      return; // Ensure the function returns here
    }

    const user = users[0];
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      res.json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.error("[users.controller][loginUser][Error] ", error);
    res.status(500).json({
      message: "There was an error when logging in the user",
    });
  }
};
