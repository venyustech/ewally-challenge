import deleteDatabaseRepository from "../repositories/deleteDatabaseRepository.js";

async function deleteAllDatabase() {
  await deleteDatabaseRepository.removeAllDatabase();
}

export default {
  deleteAllDatabase,
};
