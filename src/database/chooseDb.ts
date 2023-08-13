import database from "./database.js";
import databaseTests from "./databaseTests.js";

function getDb() {
  if (process.env.NODE_ENV === "test") return databaseTests;
  return database;
}

export default { getDb };
