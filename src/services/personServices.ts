import { Person } from "../types/person";
import { conflictError, notFoundError } from "../utils/errorUtils.js";
import personRepository from "../repositories/personRepository.js";

async function insertPerson(user: Person) {
  validateCpf(user.cpf);

  const hasPerson = await personRepository.findByCpf(user.cpf);
  if (hasPerson) throw conflictError("user already registered");

  await personRepository.insert(user);
}

async function getPersonByCpf(cpf: string) {
  validateCpf(cpf);

  const hasPerson = await personRepository.findByCpf(cpf);
  if (!hasPerson) throw notFoundError("user not founded");

  return hasPerson;
}

function validateCpf(cpf: string) {
  const cpfFormat = /^[0-9]{11}$/;
  if (!cpfFormat.test(cpf)) throw conflictError("only 11 numbers allowed to CPF");
}

export default {
  insertPerson,
  getPersonByCpf,
};
