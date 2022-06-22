const express = require("express");

// Router Controllers
const {
  listQuestionarios,
  listQuestionarioById,
  listQuestionarioRespostas,
  listQuestionarioRespostasByEixo,
  createQuestionario,
  setQuestionarioAsComplete,
  getQuestionarioResultado,
} = require("../../controllers/questionariosController.js");
const router = express.Router();

// controller

// GET requests
router.get("/list", listQuestionarios);

router.get("/questionario/:idQuestionario", listQuestionarioById);

router.get(
  "/questionario/:idQuestionario/respostas",
  listQuestionarioRespostas
);

router.get(
  "/questionario/:idQuestionario/respostas/eixo/:idEixo",
  listQuestionarioRespostasByEixo
);

router.get("/questionario/:idQuestionario/resultado", getQuestionarioResultado);

// POST requests
router.post("/create", createQuestionario);

router.post("/close", setQuestionarioAsComplete);

module.exports = router;
