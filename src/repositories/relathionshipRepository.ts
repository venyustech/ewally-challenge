import { Relationship } from "../types/relationship";
import chooseDb from "../database/chooseDb.js";

async function insert({ cpf1, cpf2 }: Relationship) {
  chooseDb.getDb().relationships[cpf1].push(cpf2);
  chooseDb.getDb().relationships[cpf2].push(cpf1);
}

async function findRelatioshipByCpf(cpf: string) {
  return chooseDb.getDb().relationships[cpf];
}

export default {
  insert,
  findRelatioshipByCpf,
};
