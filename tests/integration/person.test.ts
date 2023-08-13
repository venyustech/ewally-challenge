import bodysFactory from "../factory/bodysFactory";
describe("Person routes integration tests", () => {
  describe("POST: /person", () => {
    it.todo("should return status 200, given a valid body");
    it.todo("should return status code 400 given cpf already exists  ");
    it.todo("should return status code 400 given cpf is not 11 numbers ");
  });

  describe("GET: /person/:CPF", () => {
    it.todo("should return status code 200 given a valid cpf");
    it.todo("should return status code 400 given cpf is not 11 numbers ");
    it.todo("should return status code 404 given cpf that not exist in system");
  });
});
