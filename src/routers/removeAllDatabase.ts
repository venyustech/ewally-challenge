import { Router } from "express";
import deleteDatabase from "../controllers/deleteDatabaseControllers.js";

const removedb = Router();

removedb.delete("/clean", deleteDatabase.deleteAll);

export default removedb;
