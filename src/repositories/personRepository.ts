import { Person } from "../types/person";
import chooseDb from "../database/chooseDb.js";

async function insert({ name, cpf }: Person) {
  chooseDb.getDb().people[cpf] = { cpf, name };
  chooseDb.getDb().relationships[cpf] = [];
}

async function findByCpf(cpf: string) {
  return chooseDb.getDb().people[cpf];
}

export default {
  insert,
  findByCpf,
};
