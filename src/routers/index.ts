import { Router } from "express";
import personRouter from "./userRouter.js";
import removedb from "./removeAllDatabase.js";

const router = Router();
router.use(personRouter);
router.use(removedb);

export default router;
