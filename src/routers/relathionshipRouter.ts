import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { relationshipSchema } from "../schemas/relationshipSchema.js";
import relationshipControllers from "../controllers/relationshipControllers.js";

const relationshipRouter = Router();

relationshipRouter.post(
  "/relationship",
  validateSchemaMiddleware(relationshipSchema),
  relationshipControllers.createRelationship
);

export default relationshipRouter;
