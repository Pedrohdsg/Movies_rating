const listaFilmes = [];

const pesquisarFilme = document.getElementById("movieId");

function avaliacao(pontuacaoFilme) {
  pontuacaoFilme = Number(document.getElementById("customRange2").value);
  return pontuacaoFilme;
}

filme = document.querySelector(".movie");

const inserir = document.getElementById("inserir");

inserir.addEventListener("click", inserirFilme);

const span = document.querySelector("#filmes");



function inserirFilme() {
  listaFilmes.push({
    nomeFilme: pesquisarFilme.value,
    avaliaçãoFilme: avaliacao(),
  });
  console.log(pesquisarFilme.value);

  const li = document.createElement("li");
  document.getElementById("lista-filmes").appendChild(li).innerHTML = `${
    pesquisarFilme.value
  } - ${avaliacao()} estrela(s)`;

  localStorage.setItem("Lista de filmes", JSON.stringify(listaFilmes));
}
