import {  Person } from "../types/person";
import { conflictError } from "../utils/errorUtils.js";
import personRepository from "../repositories/personRepository.js";
import { isRegExp } from "util/types";

function insertPerson(user: Person) {
  const cpfFormat = /^[0-9]{11}$/
  if(!cpfFormat.test(user.cpf)) throw conflictError("only numbers allowed to CPF")

  if (personRepository.people[user.cpf]) throw conflictError("user already registered");
  

  personRepository.insert(user)

}

export default {
  insertPerson,
};
