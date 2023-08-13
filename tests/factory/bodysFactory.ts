import { Person } from "../../src/types/person";
import { faker } from "@faker-js/faker";

function person() {
  const body: Person = {
    name: faker.lorem.words(3),
    cpf: faker.random.numeric(11),
  };

  return body;
}

export default {
  person,
};
