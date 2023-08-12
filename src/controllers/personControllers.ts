import { Request, Response } from "express";
import personServices from "../services/personServices.js";
import { Person } from "../types/person.js";

async function createPerson(req: Request, res: Response) {
  const user: Person = req.body;

  personServices.insertPerson(user);
 
  res.send("user created successfully").status(200)
}


export default {
    createPerson
};