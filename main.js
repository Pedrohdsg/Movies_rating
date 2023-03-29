
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "15c04215dfmsh47b152db5b5c176p1edfc4jsn455d1e039959",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

fetch("https://moviesdatabase.p.rapidapi.com/titles", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  //.then(response => console.log(response.results[0].titleText.text))
  .catch((err) => console.error(err));

const pesquisarFilme = document.getElementById("movie");

console.log(pesquisarFilme);

const pontuacaoFilme = document.getElementById('customRange2');

console.log(pontuacaoFilme);
