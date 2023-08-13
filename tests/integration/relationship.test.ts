import app from "../../src/app.js";
import supertest from "supertest";
import bodysFactory from "../factory/bodysFactory.js";
import chooseDb from "../../src/database/chooseDb.js";

describe("Relationship routes integration tests", () => {
  describe("POST: /relationship", () => {
    it("should return status 200, given a valid body", async () => {
      const personA = bodysFactory.personValid();
      const personB = bodysFactory.personValid();

      const createPerson1 = await supertest(app).post("/person").send(personA);
      expect(createPerson1.status).toEqual(200);

      const createPerson2 = await supertest(app).post("/person").send(personB);
      expect(createPerson2.status).toEqual(200);

      const relationshipBody = bodysFactory.relationshipBodyValid(personA.cpf, personB.cpf);

      const createRelationship = await supertest(app).post("/relationship").send(relationshipBody);
      expect(createRelationship.status).toEqual(200);

      const relationshipsDb = chooseDb.getDb().relationships;
      expect(relationshipsDb[personA.cpf]).toContain(personB.cpf);
    });
    it("should return status code 404 given cpf not exists in system", async () => {
      const personA = bodysFactory.personValid();
      const personB = bodysFactory.personValid();

      const relationshipBody = bodysFactory.relationshipBodyValid(personA.cpf, personB.cpf);
      const createRelationship = await supertest(app).post("/relationship").send(relationshipBody);
      expect(createRelationship.status).toEqual(404);
    });
    it("should return status code 400 given cpf is not 11 numbers", async () => {
      const personA = bodysFactory.personWitout11DigitsCpf();
      const personB = bodysFactory.personValid();
      const relationshipBody = bodysFactory.relationshipBodyValid(personA.cpf, personB.cpf);
      const createRelationship = await supertest(app).post("/relationship").send(relationshipBody);
      expect(createRelationship.status).toEqual(400);
    });
  });
});
