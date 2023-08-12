import Joi from "joi";
import {  Person } from "../types/person";

const personSchema= Joi.object<Person>({
  name: Joi.string().required(),
  cpf: Joi.string().length(11).required(),
});

export {
 personSchema
}
