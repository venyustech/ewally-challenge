import app from "../../src/app.js";
import supertest from "supertest";
import bodysFactory from "../factory/bodysFactory.js";
import relationshipFactory from "../factory/relationshipFactory.js";
import personFactory from "../factory/personFactory.js";
describe("Recommendation routes integration tests", () => {
  describe("GET: /recommendations/:CPF", () => {
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
