// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "15c04215dfmsh47b152db5b5c176p1edfc4jsn455d1e039959",
//     "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
//   },
// };

// fetch("https://moviesdatabase.p.rapidapi.com/titles", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   //.then(response => console.log(response.results[0].titleText.text))
//   .catch((err) => console.error(err));

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
  document.getElementById("lista-filmes").appendChild(li).innerHTML = `${pesquisarFilme.value} - ${avaliacao()} estrela(s)`;
  
  movieStorage = localStorage.setItem(listaFilmes, value)

  

  //console.log(li);
  //console.log(listaFilmes);
}
