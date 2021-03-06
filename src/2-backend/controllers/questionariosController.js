const Database = require("sqlite-async");
const {
  createNewQuestionario,
  closeQuestionario,
  getQuestionarioById,
  listQuestionarioRespostas,
  listQuestionarioRespostasByEixo,
  processQuestionarioResultado,
  listQuestionarioRespostasByAgenda,
  listQuestionarioAgendas,
  listQuestionarioEixos,
  listQuestionarioEixosByAgenda,
} = require("../models/questionariosModel");

const sqlite3 = require("sqlite3").verbose();
const DBPATH = "./Database/mainDB.db";

exports.createQuestionario = async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  const responseMessage = { message: "success", code: 200 };
  try {
    responseMessage.message = await createNewQuestionario(
      request.body.idEscola
    );
  } catch (err) {
    responseMessage.code = 500;
    responseMessage.message = err.message;
  }
  response.statusCode = responseMessage.code;
  response.json({ message: responseMessage.message });
};

exports.setQuestionarioAsComplete = async (request, response) => {
  console.log("hjgaioguoeyguo");
  response.setHeader("Access-Control-Allow-Origin", "*");
  const responseMessage = { message: "success", code: 200 };
  try {
    if (request.body.id != undefined) {
      await closeQuestionario(request.body.id);
      console.log("antes");
    } else {
      throw new Error("Id não recebido");
    }
  } catch (err) {
    responseMessage.message = err.message;
    responseMessage.stack = err.stack;
    responseMessage.code = 500;
  }
  response.statusCode = responseMessage.code;
  response.json({ message: responseMessage.message });
};

exports.listQuestionarios = (request, response) => {
  response.json({ message: "Not Implemented!" });
};

exports.listQuestionarioById = async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  const responseMessage = { message: "success", code: 200, questionario: {} };
  try {
    const questionario = await getQuestionarioById(
      request.params.idQuestionario
    );
    responseMessage.questionario = questionario;
  } catch (err) {
    responseMessage.code = 500;
    responseMessage.message = err.message;
  }
  response.statusCode = responseMessage.code;
  response.send(responseMessage);
};

exports.listQuestionarioRespostas = async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  const responseMessage = { message: "success", code: 200, respostas: {} };
  try {
    const listRespostas = await listQuestionarioRespostas(
      request.params.idQuestionario
    );
    responseMessage.respostas = listRespostas.respostas;
    responseMessage.answeredQuestions = listRespostas.answeredQuestions;
    responseMessage.unansweredQuestions = listRespostas.unansweredQuestions;
  } catch (err) {
    responseMessage.code = 500;
    responseMessage.message = err.message;
    responseMessage.stack = err.stack;
  }
  response.statusCode = responseMessage.code;
  response.json(responseMessage);
};

exports.listQuestionarioRespostasByAgenda = async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  const responseMessage = { message: "success", code: 200, respostas: {} };
  try {
    const listRespostas = await listQuestionarioRespostasByAgenda(
      request.params.idQuestionario,
      request.params.idAgenda
    );
    responseMessage.respostas = listRespostas.respostas;
    responseMessage.answeredQuestions = listRespostas.answeredQuestions;
    responseMessage.unansweredQuestions = listRespostas.unansweredQuestions;
  } catch (err) {
    responseMessage.code = 500;
    responseMessage.message = err.message;
    responseMessage.stack = err.stack;
  }
  response.statusCode = responseMessage.code;
  response.json(responseMessage);
};

exports.listQuestionarioRespostasByEixo = async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  const responseMessage = { message: "success", code: 200, respostas: {} };
  try {
    const listRespostas = await listQuestionarioRespostasByEixo(
      request.params.idQuestionario,
      request.params.idEixo
    );
    responseMessage.respostas = listRespostas.respostas;
    responseMessage.answeredQuestions = listRespostas.answeredQuestions;
    responseMessage.unansweredQuestions = listRespostas.unansweredQuestions;
  } catch (err) {
    responseMessage.code = 500;
    responseMessage.message = err.message;
  }
  response.statusCode = responseMessage.code;
  response.json(responseMessage);
};

exports.listQuestionarioRespostasAgendas = async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  const responseMessage = { message: "success", code: 200, agendas: {} };
  try {
    const listAgendas = await listQuestionarioAgendas(
      request.params.idQuestionario
    );
    responseMessage.agendas = listAgendas.agendas;
  } catch (err) {
    responseMessage.code = 500;
    responseMessage.message = err.message;
  }
  response.statusCode = responseMessage.code;
  response.json(responseMessage);
};

exports.listQuestionarioRespostasEixos = async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  const responseMessage = { message: "success", code: 200, eixos: {} };
  try {
    const listEixos = await listQuestionarioEixos(
      request.params.idQuestionario
    );
    responseMessage.eixos = listEixos.eixos;
  } catch (err) {
    responseMessage.code = 500;
    responseMessage.message = err.message;
  }
  response.statusCode = responseMessage.code;
  response.json(responseMessage);
};

exports.listQuestionarioRespostasEixosByAgenda = async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  const responseMessage = { message: "success", code: 200, eixos: {} };
  try {
    const listEixos = await listQuestionarioEixosByAgenda(
      request.params.idQuestionario,
      request.params.idAgenda
    );
    responseMessage.eixos = listEixos.eixos;
  } catch (err) {
    responseMessage.code = 500;
    responseMessage.message = err.message;
  }
  response.statusCode = responseMessage.code;
  response.json(responseMessage);
};

exports.getQuestionarioResultado = async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  const responseMessage = { message: "success", code: 200, resultado: {} };
  try {
    const resultado = await processQuestionarioResultado(
      request.params.idQuestionario
    );
    responseMessage.resultado = resultado;
  } catch (err) {
    responseMessage.code = 500;
    responseMessage.message = err.message;
    responseMessage.stack = err.stack;
  }
  response.statusCode = responseMessage.code;
  response.json(responseMessage);
};
