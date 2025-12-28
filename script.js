const table = document.getElementById("planilha");
const STORAGE_KEY = "planilha_usuario";

// Se o usuário já editou antes, carrega versão salva
const salvo = localStorage.getItem(STORAGE_KEY);
if (salvo) {
  render(JSON.parse(salvo));
} else {
  carregarCSV();
}

function carregarCSV() {
  fetch("controle_teste_mesas.csv")
    .then(res => res.text())
    .then(texto => {
      const linhas = texto.trim().split("\n");
      const dados = linhas.map(l => l.split(","));
      render(dados);
    });
}

function render(dados) {
  table.innerHTML = "";

  dados.forEach((linha, i) => {
    const tr = document.createElement("tr");

    linha.forEach((celula, j) => {
      const td = document.createElement("td");
      td.contentEditable = true;
      td.innerText = celula;

      td.addEventListener("input", () => {
        dados[i][j] = td.innerText;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
      });

      tr.appendChild(td);
    });

    table.appendChild(tr);
  });
}
