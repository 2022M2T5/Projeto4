//Cria uma função para comparar o email inserido com o padrão
sessionStorage.clear();

function verify(input) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(input);
}

//Cria uma função para determinar qual ação tomar depois de verificar o email
function show(param) {
  if (param) {
    var email = document.getElementById("floatingInput").value;
    var loginType = document.querySelector(
      'input[name="schoolType"]:checked'
    ).value;

    console.log(loginType);
    if (loginType == "escola") {
      return LoginScreen.loginEscola(email);
    }
    if (loginType == "rede") {
      return LoginScreen.loginRede(email);
    }

    if (loginType == "falconi") {
      return LoginScreen.loginFalconi(email);
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Formato de email inválido",
    });
  }
}

// Criar uma função para o botão proximo
// Pega os valores do input e salva na sessionStorage do navegador
function buttonEntrar() {
  let result = verify(document.getElementById("floatingInput").value);
  show(result);
}

var LoginScreen = {
  loginEscola(email) {
    $.ajax({
      type: "POST",
      url: API_BASE_URL + "/usuarios/escola/login",
      data: { email: email },
      success: function (resultados) {
        if (resultados.data) {
          if (resultados.data.idEscola) {
            Swal.fire({
              icon: "success",
              title: "Usuário Logado com Sucesso!",
              text: "Redirecionando...",
            }).then((result) => {
              sessionStorage.setItem("userId", resultados.data.id);
              sessionStorage.setItem("idEscola", resultados.data.idEscola);
              document.location.href = "../5-SchoolChooseActionScreen/";
            });
          }
        }
      },
      error: function (eerrr) {
        console.log(eerrr);
      },
    });
  },
  loginRede(email) {
    $.ajax({
      type: "POST",
      url: API_BASE_URL + "/usuarios/rede/login",
      data: { email: email },
      success: function (resultados) {
        console.log(resultados);
      },
    });
  },
  loginFalconi(email) {
    $.ajax({
      type: "POST",
      url: API_BASE_URL + "/usuarios/falconi/login",
      data: { email: email },
      success: function (resultados) {
        if (resultados.data.id) {
          Swal.fire({
            icon: "success",
            title: "Usuário Logado com Sucesso!",
            text: "Redirecionando...",
          }).then((result) => {
            sessionStorage.setItem("userId", resultados.data.id);
            document.location.href =
              "../../3-editar_questionario/1-EditQuizScreen/";
          });
        }
      },
    });
  },
};
