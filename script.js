const KEY = "planilha_html_usuario";
const container = document.getElementById("planilha");

// Restaura conteúdo salvo
const salvo = localStorage.getItem(KEY);
if (salvo) {
  container.innerHTML = salvo;
}

// Torna tudo editável
container.querySelectorAll("div, span, p").forEach(el => {
  el.contentEditable = "true";
});

// Salva qualquer alteração
container.addEventListener("input", () => {
  localStorage.setItem(KEY, container.innerHTML);
});
