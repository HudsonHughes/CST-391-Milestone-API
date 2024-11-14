// users.dao.ts
import { execute } from "../services/mysql.connector";
import { User } from "./users.model";
import { userQueries } from "./users.queries";
import { OkPacket } from "mysql";

// Create a new user
export const createUser = async (user: User): Promise<OkPacket> => {
  return execute<OkPacket>(userQueries.createUser, [
    user.favoriteVerse,
    user.userBio,
    user.username,
    user.password,
    user.email,
    user.phoneNumber,
  ]);
};

// Get a user by username
export const getUserByUsername = async (username: string): Promise<User[]> => {
  return execute<User[]>(userQueries.getUserByUsername, [username]);
};
