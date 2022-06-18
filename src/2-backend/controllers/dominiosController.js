const { createNewDominio } = require("../models/dominiosModel");

exports.postCreateDominio = async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  const responseMessage = { message: "success", code: 200, respostas: {} };
  try {
    await createNewDominio(request.body.nome, request.body.idEixo);
  } catch (err) {
    console.log(133333);
    responseMessage.code = 500;
    responseMessage.message = err.message;
    responseMessage.trace = err.stack;
  }
  response.statusCode = responseMessage.code;
  response.json(responseMessage);
};