import { Router } from "express";
import personRouter from "./userRouter.js";
import removedb from "./removeAllDatabase.js";
import relationshipRouter from "./relathionshipRouter.js";
import recommendationsRouter from "./recommendationsRouter.js";

const router = Router();
router.use(personRouter);
router.use(removedb);
router.use(relationshipRouter);
router.use(recommendationsRouter);

export default router;
