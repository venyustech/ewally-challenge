import { Request, Response } from "express";
import deleteDatabaseService from "../services/deleteDatabaseService.js";

async function deleteAll(req: Request, res: Response) {
  await deleteDatabaseService.deleteAllDatabase();

  return res.send("database cleaned").status(200);
}

export default {
  deleteAll,
};
