document
  .getElementById("form-inscricao")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let curso = document.getElementById("curso").value;

    alert(
      "Inscrição realizada com sucesso! " +
        nome +
        ", você se inscreveu no curso de " +
        curso +
        "."
    );
  });
