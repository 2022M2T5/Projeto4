const express = require("express");
const router = express.Router();


// Router Controllers
const {
  getUsuarioEscola,
  getUsuarioRede,
  getUsuarioFalconi,
  createUsuarioEscola,
  createUsuarioRede,
  createUsuarioFalconi,
  createLoginRede,
} = require("../../controllers/usuariosController");

// GET requests
router.get("/falconi/:usuarioId", getUsuarioFalconi);

router.get("/escola/:usuarioId", getUsuarioEscola);

router.get("/rede/:usuarioId", getUsuarioRede);

// POST requests
router.post("/falconi/create", createUsuarioFalconi);

router.post("/escola/create", createUsuarioEscola);

router.post("/rede/create", createUsuarioRede);

router.post("/rede/login", createLoginRede);

module.exports = router;
