import supertest from "supertest";
import { Person } from "../../src/types/person";
import app from "../../src/app.js";

async function createPerson(person: Person) {
  const response = await supertest(app).post("/person").send(person);
  return response;
}

export default {
  createPerson,
};
