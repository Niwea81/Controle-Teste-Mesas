const KEY = "planilha_html_usuario";
const container = document.getElementById("planilha");

// Só restaura se existir algo válido
const salvo = localStorage.getItem(KEY);
if (salvo && salvo.length > 50) {
  container.innerHTML = salvo;
}

// Torna textos editáveis (sem quebrar layout)
container.querySelectorAll("div, span, p").forEach(el => {
  el.contentEditable = "true";
});

// Salva somente se houver conteúdo
container.addEventListener("input", () => {
  if (container.innerHTML.trim().length > 50) {
    localStorage.setItem(KEY, container.innerHTML);
  }
});
