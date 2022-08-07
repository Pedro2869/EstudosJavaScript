let buttonsResposta = document.querySelectorAll(".thread button");

for (let i = 0; i < buttonsResposta.length; i++) {
  buttonsResposta[i].addEventListener("click", () => {
    let respostas = document.querySelectorAll(".respostas");
    respostas[i].style.display = "block";
  });
}

let forms = document.querySelectorAll("form");

for (let i = 0; i < forms.length; i++) {
  forms[i].addEventListener("submit", (e) => {
    e.preventDefault();
    let conteudo = document.querySelectorAll("textarea")[i];
    forms[i].insertAdjacentHTML('beforebegin', '<p> '+conteudo.value+' </p>')
    conteudo.value = "";
  });
}
