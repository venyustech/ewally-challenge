import app from "../../src/app.js";
import supertest from "supertest";
import bodysFactory from "../factory/bodysFactory.js";
import chooseDb from "../../src/database/chooseDb.js";
import personFactory from "../factory/personFactory.js";

describe("Person routes integration tests", () => {
  describe("POST: /person", () => {
    it("should return status 200, given a valid body", async () => {
      const person = bodysFactory.personValid();

      const response = await personFactory.createPerson(person);

      const database = chooseDb.getDb().people;

      expect(response.status).toEqual(200);
      expect(database).not.toBeNull();
    });
  });

  describe("GET: /person/:CPF", () => {
    it("should return status code 200 given a valid cpf", async () => {
      const person = bodysFactory.personValid();

      const response = await personFactory.createPerson(person);
      expect(response.status).toEqual(200);

      const response2 = await supertest(app).get(`/person/${person.cpf}`);
      expect(response2.status).toEqual(200);
    });
  });
});
