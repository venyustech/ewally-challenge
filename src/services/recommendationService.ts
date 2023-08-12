import { notFoundError } from "../utils/errorUtils.js";
import personRepository from "../repositories/personRepository.js";
import validateCpf from "./shared/validateCpf.js";
import relathionshipRepository from "../repositories/relathionshipRepository.js";

async function getRecommendationByCpf(cpf: string) {
  validateCpf.validateCpf(cpf);

  const hasPerson = await personRepository.findByCpf(cpf);
  if (!hasPerson) throw notFoundError("user not founded");

  let friendScores: Record<string, number> = {};
  const userRelationships = await relathionshipRepository.findRelatioshipByCpf(cpf);

  for (const friendCpf of userRelationships) {
    const friendRelationships = await relathionshipRepository.findRelatioshipByCpf(friendCpf);

    for (const potentialFriendCpf of friendRelationships) {
      if (potentialFriendCpf !== cpf && !userRelationships.includes(potentialFriendCpf)) {
        friendScores[potentialFriendCpf] = (friendScores[potentialFriendCpf] || 0) + 1;
      }
    }
  }
  let recommendations = Object.keys(friendScores).filter(
    (potentialFriendFoundedCpf) => friendScores[potentialFriendFoundedCpf] > 0
  );

  friendScores = {};
  return recommendations;
}

export default {
  getRecommendationByCpf,
};
