import { Router } from "express";
import personRouter from "./userRouter.js";

const router = Router();
router.use(personRouter);


export default router;