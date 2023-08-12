import { Person } from "../types/person";

const people: Record<string, Person> = {};

async function insert({name, cpf}: Person) {
  people[cpf] = { cpf, name };
}

async function findByCpf( cpf: string) {
    return people[cpf]
}

export default {
  insert,
  findByCpf
}