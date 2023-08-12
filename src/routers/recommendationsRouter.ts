import { Router } from "express";
import recommendationsControllers from "../controllers/recommendationsControllers.js";

const recommendationsRouter = Router();

recommendationsRouter.get("/recommendations/:CPF", recommendationsControllers.getRecommendation);

export default recommendationsRouter;
