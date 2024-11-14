import {
    createUser,
    getUserByUsername
  } from "./users.dao";

export const userQueries = {
    createUser: `INSERT INTO users (favoriteVerse, userBio, username, password, email, phoneNumber) VALUES (?, ?, ?, ?, ?, ?)`,
    getUserByUsername: `SELECT * FROM users WHERE username = ?`,
  };
  