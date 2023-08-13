import app from "../../src/app.js";
import supertest from "supertest";
import bodysFactory from "../factory/bodysFactory.js";
import chooseDb from "../../src/database/chooseDb.js";
import relationshipFactory from "../factory/relationshipFactory.js";
import personRepository from "../../src/repositories/personRepository.js";
import relathionshipRepository from "../../src/repositories/relathionshipRepository.js";

describe("Relationship routes integration tests", () => {
  beforeEach(clearAndResetMocks());
  describe("POST: /relationship", () => {
    it("should return status 200, given a valid body", async () => {
      const personA = bodysFactory.personValid();
      const personB = bodysFactory.personValid();

      jest.spyOn(personRepository, "findByCpf").mockResolvedValue(null);
      const createPerson1 = await supertest(app).post("/person").send(personA);
      expect(createPerson1.status).toEqual(200);

      jest.spyOn(personRepository, "findByCpf").mockResolvedValue(null);
      const createPerson2 = await supertest(app).post("/person").send(personB);
      expect(createPerson2.status).toEqual(200);

      jest.spyOn(personRepository, "findByCpf").mockResolvedValue(personA);
      jest.spyOn(relathionshipRepository, "insert").mockResolvedValue(null);
      const relationshipAB = await relationshipFactory.createRelationship(personA.cpf, personB.cpf);
      expect(relationshipAB.status).toEqual(200);

      const relationshipsDb = chooseDb.getDb().relationships;
      relationshipsDb[personA.cpf] = [personB.cpf];

      expect(relationshipsDb[personA.cpf]).toContain(personB.cpf);
    });
    it("should return status code 404 given cpf not exists in system", async () => {
      const personA = bodysFactory.personValid();
      const personB = bodysFactory.personValid();

      jest.spyOn(personRepository, "findByCpf").mockResolvedValue(null);
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

function clearAndResetMocks(): jest.ProvidesHookCallback {
  return () => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  };
}
