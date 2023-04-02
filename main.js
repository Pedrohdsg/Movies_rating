const listaFilmes = [];

const pesquisarFilme = document.getElementById("movieId");

function carregarFilmes() {
  const filmesGuardados = JSON.parse(localStorage.getItem("Lista de filmes"));

  if (filmesGuardados !== null) {
    filmesGuardados.forEach((element) => {
      listaFilmes.push({
        nomeFilme: element.nomeFilme,
        avaliaçãoFilme: element.avaliaçãoFilme,
      });

      const li = document.createElement("li");
      document
        .getElementById("lista-filmes")
        .appendChild(
          li
        ).innerHTML = `${element.nomeFilme} - ${element.avaliaçãoFilme} estrela(s)`;
    });
  }
}

function avaliacao(pontuacaoFilme) {
  pontuacaoFilme = Number(document.getElementById("customRange2").value);
  return pontuacaoFilme;
}

filme = document.querySelector(".movie");

const inserir = document.getElementById("inserir");

inserir.addEventListener("click", inserirFilme);

const span = document.querySelector("#filmes");

function inserirFilme() {
  if (pesquisarFilme.value != "") {
    listaFilmes.push({
      nomeFilme: pesquisarFilme.value,
      avaliaçãoFilme: avaliacao(),
    });

    // if (listaFilmes.some((e) => e.nomeFilme === pesquisarFilme.value)) {
    const li = document.createElement("li");
    document.getElementById("lista-filmes").appendChild(li).innerHTML = `${
      pesquisarFilme.value
    } - ${avaliacao()} estrela(s)`;

    localStorage.setItem("Lista de filmes", JSON.stringify(listaFilmes));
  }
}
carregarFilmes();
