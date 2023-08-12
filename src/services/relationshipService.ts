import { Relationship } from "../types/relationship";
import validateCpf from "./shared/validateCpf.js";
import personRepository from "../repositories/personRepository.js";
import { notFoundError } from "../utils/errorUtils.js";
import relathionshipRepository from "../repositories/relathionshipRepository.js";

async function insertRelationship({ cpf1, cpf2 }: Relationship) {
  await validateCpf.validateCpf(cpf1);
  await validateCpf.validateCpf(cpf2);

  const hasCPF1 = await personRepository.findByCpf(cpf1);
  const hasCPF2 = await personRepository.findByCpf(cpf2);
  if (!hasCPF1 || !hasCPF2) throw notFoundError("CPF1 or CPF2 not found");

  await relathionshipRepository.insert({ cpf1, cpf2 });
}

export default {
  insertRelationship,
};
