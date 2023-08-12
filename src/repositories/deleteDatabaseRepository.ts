import database from "./database.js";

async function removeAllDatabase() {
  database.people = {};
}

export default {
  removeAllDatabase,
};
