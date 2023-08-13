import { Person } from "../../src/types/person";
import { faker } from "@faker-js/faker";
import { Relationship } from "../../src/types/relationship";

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

function relationshipBodyValid(cpf1: string, cpf2: string) {
  const body: Relationship = {
    cpf1,
    cpf2,
  };
  return body;
}

export default {
  personValid,
  personWitout11DigitsCpf,
  personWithInvalidCpf,
  relationshipBodyValid,
};
