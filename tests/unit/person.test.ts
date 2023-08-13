import app from "../../src/app.js";
import supertest from "supertest";
import bodysFactory from "../factory/bodysFactory.js";
import chooseDb from "../../src/database/chooseDb.js";
import personFactory from "../factory/personFactory.js";
import personRepository from "../../src/repositories/personRepository.js";

describe("Person routes unit tests", () => {
  beforeEach(clearAndResetMocks());

  describe("POST: /person", () => {
    it("should return status code 400 given cpf already exists", async () => {
      const person = bodysFactory.personValid();
      jest.spyOn(personRepository, "findByCpf").mockResolvedValue(person);

      const response = await personFactory.createPerson(person);
      expect(response.status).toEqual(400);
    });
    it("should return status code 400 given cpf is not 11 numbers ", async () => {
      const person = bodysFactory.personWitout11DigitsCpf();

      const response = await personFactory.createPerson(person);
      expect(response.status).toEqual(400);
    });
  });

  describe("GET: /person/:CPF", () => {
    it("should return status code 400 given cpf is not 11 numbers ", async () => {
      jest.spyOn(personRepository, "findByCpf").mockResolvedValue(null);

      const person = bodysFactory.personWitout11DigitsCpf();
      const response = await supertest(app).get(`/person/${person.cpf}`);
      expect(response.status).toEqual(400);
    });
    it("should return status code 404 given cpf that not exist in system", async () => {
      const person = bodysFactory.personValid();

      const response = await supertest(app).get(`/person/${person.cpf}`);
      expect(response.status).toEqual(404);
    });
  });
});

function clearAndResetMocks(): jest.ProvidesHookCallback {
  return () => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  };
}
