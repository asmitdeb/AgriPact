import { Router } from "express";
import { getContracts } from "../controllers/contracts.controller"
import requireAuth from "../middleware/checkAuth";

export const contractsRouter = Router();
//@ts-ignore
contractsRouter.get("/all", requireAuth, getContracts);

