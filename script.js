const STORAGE_KEY = "planilha_privada";

// Carrega CSV
fetch("Controle Teste Mesas.csv.csv")
  .then(r => r.text())
  .then(texto => {
    let dados = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (!dados) {
      const linhas = texto.trim().split("\n");
      dados = linhas.map(l => l.split(","));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
    }

    render(dados);
  });

function render(dados) {
  const table = document.getElementById("planilha");
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
