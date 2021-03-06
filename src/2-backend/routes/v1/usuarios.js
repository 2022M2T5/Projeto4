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
  loginRede,
  loginFalconi,
  loginEscola,
} = require("../../controllers/usuariosController");

// GET requests
router.get("/falconi/:usuarioId", getUsuarioFalconi);

router.get("/escola/:usuarioId", getUsuarioEscola);

router.get("/rede/:usuarioId", getUsuarioRede);

// POST requests
router.post("/falconi/create", createUsuarioFalconi);

router.post("/escola/create", createUsuarioEscola);

router.post("/rede/create", createUsuarioRede);

router.post("/rede/login", loginRede);

router.post("/falconi/login", loginFalconi);

router.post("/escola/login", loginEscola);

module.exports = router;
