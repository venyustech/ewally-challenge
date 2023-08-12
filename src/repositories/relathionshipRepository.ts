import { Relationship } from "../types/relationship";
import database from "./database.js";

async function insert({ cpf1, cpf2 }: Relationship) {
  database.relationships[cpf1].push(cpf2);
  database.relationships[cpf2].push(cpf1);
}

async function findRelatioshipByCpf(cpf: string) {
  return database.relationships[cpf];
}

export default {
  insert,
  findRelatioshipByCpf,
};
