import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { Router } from "express";
export const apiRouter = Router();

apiRouter.get("/exoplanets", async (req, res) => {
    const limit = parseInt(req.query.limit) || 60;
    const exoplanets = await prisma.exoplanet.findMany({take: limit});
    res.status(200).json(exoplanets);
});