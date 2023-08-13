import supertest from "supertest";
import bodysFactory from "../factory/bodysFactory";
import personFactory from "../factory/personFactory";
import app from "../../src/app.js";
import chooseDb from "../../src/database/chooseDb";

describe("Delete database routes integration tests", () => {
  describe("DELETE: /clean", () => {
    it("should delete all database", async () => {
      const person = bodysFactory.personValid();

      const createperson = await personFactory.createPerson(person);
      expect(createperson.status).toEqual(200);

      const response = await supertest(app).delete("/clean");
      const database = chooseDb.getDb().people;

      expect(response.status).toEqual(200);
      expect(database[person.cpf]).not.toBeDefined();
    });
  });
});
