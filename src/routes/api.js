import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { Router } from "express";
export const apiRouter = Router();

apiRouter.get("/", async (req, res) => {
  res
    .status(200)
    .json({
      message:
        "Bem-vindo! Para iniciar acesse: https://github.com/f-gabriel-braga/exoplanets-api",
    });
});

apiRouter.get("/exoplanets", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 60;
    const exoplanets = await prisma.exoplanet.findMany({ take: limit });
    res.status(200).json(exoplanets);
  } catch (err) {
    return res.status(500).json({ message: "Erro interno no servidor." });
  }
});

apiRouter.get("/exoplanets/search/:search", async (req, res) => {
  try {
    const { search } = req.params;
    const limit = parseInt(req.query.limit) || 60;
    const exoplanets = await prisma.exoplanet.findMany({
      where: { pl_name: { contains: search } },
      take: limit,
    });
    res.status(200).json(exoplanets);
  } catch (err) {
    return res.status(500).json({ message: "Erro interno no servidor." });
  }
});

apiRouter.get("/exoplanets/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "O id deve ser um número." });
    }
    const exoplanets = await prisma.exoplanet.findFirst({
      where: { id },
    });
    return res.status(200).json(exoplanets);
  } catch (err) {
    return res.status(500).json({ message: "Erro interno no servidor." });
  }
});
