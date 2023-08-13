import { Person } from "../types/person";
import { conflictError, notFoundError } from "../utils/errorUtils.js";
import personRepository from "../repositories/personRepository.js";
import validateCpf from "./shared/validateCpf.js";

async function insertPerson(user: Person) {
  await validateCpf.validateCpf(user.cpf);

  const hasPerson = await personRepository.findByCpf(user.cpf);
  if (hasPerson) throw conflictError("user already registered");

  await personRepository.insert(user);
}

async function getPersonByCpf(cpf: string) {
  await validateCpf.validateCpf(cpf);

  const hasPerson = await personRepository.findByCpf(cpf);
  if (!hasPerson) throw notFoundError("user not founded");

  return hasPerson;
}

export default {
  insertPerson,
  getPersonByCpf,
};
