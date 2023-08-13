import bodysFactory from "../factory/bodysFactory";

describe("Recommendation routes integration tests", () => {
  describe("GET: /recommendations/:CPF", () => {
    it("should return status 200, given a valid body", async () => {
      const personA = bodysFactory.personValid();
    });
    it.todo("should return status code 400 given cpf is not 11 numbers ");
  });
});
