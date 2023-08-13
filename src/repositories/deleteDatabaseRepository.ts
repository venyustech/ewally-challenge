import chooseDb from "../database/chooseDb.js";

async function removeAllDatabase() {
  chooseDb.getDb().people = {};
}

export default {
  removeAllDatabase,
};
