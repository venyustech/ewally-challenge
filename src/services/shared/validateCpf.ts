import { conflictError } from "../../utils/errorUtils.js";

async function validateCpf(cpf: string) {
  const cpfFormat = /^[0-9]{11}$/;
  console.log(cpfFormat.test(cpf));
  if (!cpfFormat.test(cpf)) throw conflictError("only 11 numbers allowed to CPF");
}
export default { validateCpf };
