import { func } from "joi";
import { Person } from "../../src/types/person";
import { faker } from "@faker-js/faker";

function personValid() {
  const body: Person = {
    name: faker.lorem.words(3),
    cpf: faker.random.numeric(11),
  };

  return body;
}
function personWithInvalidCpf() {
  const body: Person = {
    name: faker.lorem.words(3),
    cpf: faker.random.alphaNumeric(11),
  };
  return body;
}
function personWitout11DigitsCpf() {
  const body: Person = {
    name: faker.lorem.words(3),
    cpf: faker.random.alphaNumeric(12),
  };
  return body;
}

export default {
  personValid,
  personWitout11DigitsCpf,
  personWithInvalidCpf,
};
