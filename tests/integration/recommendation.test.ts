import app from "../../src/app.js";
import supertest from "supertest";
import bodysFactory from "../factory/bodysFactory.js";
import relationshipFactory from "../factory/relationshipFactory.js";
import personFactory from "../factory/personFactory.js";
describe("Recommendation routes integration tests", () => {
  describe("GET: /recommendations/:CPF", () => {
    it("should return status 200, given a valid body", async () => {
      const personA = bodysFactory.personValid();
      const personB = bodysFactory.personValid();
      const personC = bodysFactory.personValid();
      const personD = bodysFactory.personValid();
      const personE = bodysFactory.personValid();

      const createPersonA = await personFactory.createPerson(personA);
      const createPersonB = await personFactory.createPerson(personB);
      const createPersonC = await personFactory.createPerson(personC);
      const createPersonD = await personFactory.createPerson(personD);
      const createPersonE = await personFactory.createPerson(personE);

      expect(
        createPersonA.status &&
          createPersonB.status &&
          createPersonC.status &&
          createPersonD.status &&
          createPersonE.status
      ).toEqual(200);

      const relationshipAB = await relationshipFactory.createRelationship(personA.cpf, personB.cpf);
      const relationshipAC = await relationshipFactory.createRelationship(personA.cpf, personC.cpf);
      const relationshipBD = await relationshipFactory.createRelationship(personB.cpf, personD.cpf);
      const relationshipCD = await relationshipFactory.createRelationship(personC.cpf, personD.cpf);
      const relationshipCE = await relationshipFactory.createRelationship(personC.cpf, personE.cpf);

      expect(
        relationshipAB.status &&
          relationshipAC.status &&
          relationshipBD.status &&
          relationshipCD.status &&
          relationshipCE.status
      ).toBe(200);

      const getRecommendation = await supertest(app).get(`/recommendations/${personA.cpf}`);
      expect(getRecommendation.status).toEqual(200);
      expect(getRecommendation.body).toStrictEqual([personD.cpf, personE.cpf]);
    });
    it("should return status code 400 given cpf is not 11 numbers ", async () => {
      const personA = bodysFactory.personWitout11DigitsCpf();
      const getRecommendation = await supertest(app).get(`/recommendations/${personA.cpf}`);
      expect(getRecommendation.status).toEqual(400);
    });
    it("should return status code 404 given cpf is not on system ", async () => {
      const personA = bodysFactory.personValid();
      const getRecommendation = await supertest(app).get(`/recommendations/${personA.cpf}`);
      expect(getRecommendation.status).toEqual(404);
    });
  });
});
