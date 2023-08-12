import { Request, Response } from "express";
import recommendationService from "../services/recommendationService.js";

async function getRecommendation(req: Request, res: Response) {
  const { CPF } = req.params;

  const recommendations = await recommendationService.getRecommendationByCpf(CPF);
  return res.send(recommendations).status(200);
}

export default {
  getRecommendation,
};
