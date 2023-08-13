import supertest from "supertest";
import bodysFactory from "./bodysFactory";
import app from "../../src/app.js";

async function createRelationship(cpf1: string, cpf2: string) {
  const relationship = bodysFactory.relationshipBodyValid(cpf1, cpf2);
  const createRelationship = await supertest(app).post("/relationship").send(relationship);
  return createRelationship;
}

export default {
  createRelationship,
};
