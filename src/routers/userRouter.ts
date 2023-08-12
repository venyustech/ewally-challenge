import { Router } from "express";
import personControllers from "../controllers/personControllers.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { personSchema } from "../schemas/userSchema.js";

const personRouter = Router();

personRouter.post(
  "/person",
  validateSchemaMiddleware(personSchema),
  personControllers.createPerson
);
personRouter.get("/person/:CPF", personControllers.getPerson);

export default personRouter;
