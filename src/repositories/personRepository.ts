import { Person } from "../types/person";

const people: Record<string, Person> = {};

async function insert({name, cpf}: Person) {
    people[cpf] = { cpf, name };
    console.log(people)

}

export default {
  insert,
  people
}