import { Person } from "../types/person";
import database from "./database.js";

async function insert({ name, cpf }: Person) {
  database.people[cpf] = { cpf, name };
  database.relationships[cpf] = [];
}

async function findByCpf(cpf: string) {
  return database.people[cpf];
}

export default {
  insert,
  findByCpf,
};
