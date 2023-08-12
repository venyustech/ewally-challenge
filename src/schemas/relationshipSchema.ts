import Joi from "joi";
import { Relationship } from "../types/relationship";

const relationshipSchema = Joi.object<Relationship>({
  cpf1: Joi.string().length(11).required(),
  cpf2: Joi.string().length(11).required(),
});

export { relationshipSchema };
