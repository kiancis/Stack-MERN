import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export async function connectionDB() {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log('connected to', db.connection.name);
  } catch (err) {
    console.error(err);
  }
}
