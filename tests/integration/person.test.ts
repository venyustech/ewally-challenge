import app from "../../src/app.js";
import supertest from "supertest";
import bodysFactory from "../factory/bodysFactory.js";
import chooseDb from "../../src/database/chooseDb.js";

describe("Person routes integration tests", () => {
  describe("POST: /person", () => {
    it("should return status 200, given a valid body", async () => {
      const person = bodysFactory.personValid();

      const response = await supertest(app).post("/person").send(person);

      const database = chooseDb.getDb().people;

      expect(response.status).toEqual(200);
      expect(database).not.toBeNull();
    });
    it("should return status code 400 given cpf already exists", async () => {
      const person = bodysFactory.personValid();

      const response = await supertest(app).post("/person").send(person);
      expect(response.status).toEqual(200);

      const response2 = await supertest(app).post("/person").send(person);
      expect(response2.status).toEqual(400);
    });
    it("should return status code 400 given cpf is not 11 numbers ", async () => {
      const person = bodysFactory.personWitout11DigitsCpf();

      const response = await supertest(app).post("/person").send(person);
      expect(response.status).toEqual(400);
    });
  });

  describe("GET: /person/:CPF", () => {
    it("should return status code 200 given a valid cpf", async () => {
      const person = bodysFactory.personValid();

      const response = await supertest(app).post("/person").send(person);
      expect(response.status).toEqual(200);

      const response2 = await supertest(app).get(`/person/${person.cpf}`);
      expect(response2.status).toEqual(200);
    });
    it("should return status code 400 given cpf is not 11 numbers ", async () => {
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
