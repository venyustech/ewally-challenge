import { Request, Response } from "express";
import personServices from "../services/personServices.js";
import { Person } from "../types/person.js";
import { json } from "body-parser";

async function createPerson(req: Request, res: Response) {
  const user: Person = req.body;

  await personServices.insertPerson(user);

  return res.send("user created successfully").status(200);
}

async function getPerson(req: Request, res: Response) {
  const { CPF } = req.params;

  const person = await personServices.getPersonByCpf(CPF);

  return res.send({ ...person }).status(200);
}

export default {
  createPerson,
  getPerson,
};
