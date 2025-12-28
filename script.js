const KEY = "planilha_html_usuario";
const table = document.getElementById("planilha");

// Torna todas as células editáveis
table.querySelectorAll("td").forEach(td => {
  td.contentEditable = "true";
});

// Restaura estado salvo
const salvo = localStorage.getItem(KEY);
if (salvo) {
  table.innerHTML = salvo;
}

// Salva a cada edição
table.addEventListener("input", () => {
  localStorage.setItem(KEY, table.innerHTML);
});
