import app from "../../src/app.js";
import supertest from "supertest";
import bodysFactory from "../factory/bodysFactory.js";
import chooseDb from "../../src/database/chooseDb.js";
import relationshipFactory from "../factory/relationshipFactory.js";

describe("Relationship routes integration tests", () => {
  describe("POST: /relationship", () => {
    it("should return status 200, given a valid body", async () => {
      const personA = bodysFactory.personValid();
      const personB = bodysFactory.personValid();

      const createPerson1 = await supertest(app).post("/person").send(personA);
      expect(createPerson1.status).toEqual(200);

      const createPerson2 = await supertest(app).post("/person").send(personB);
      expect(createPerson2.status).toEqual(200);

      const relationshipAB = await relationshipFactory.createRelationship(personA.cpf, personB.cpf);
      expect(relationshipAB.status).toEqual(200);

      const relationshipsDb = chooseDb.getDb().relationships;
      expect(relationshipsDb[personA.cpf]).toContain(personB.cpf);
    });
  });
});
