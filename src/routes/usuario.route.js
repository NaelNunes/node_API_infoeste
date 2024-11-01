// import { Router } from "express";
import express from "express";
import UsuarioController from "../controllers/usuario.controller.js"

const router = express.Router();
const crtl = new UsuarioController();

router.post("/criar", crtl.criar);
router.get("/listar", crtl.listar);
router.get("/buscar/:id", crtl.buscar);
router.delete("/deletar/:id", crtl.deletar);
router.put("/update", crtl.update);

export default router;