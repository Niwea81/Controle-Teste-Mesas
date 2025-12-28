const KEY = "planilha_html_usuario";
const container = document.getElementById("planilha");
// Restaura somente se houver conteúdo válido
const salvo = localStorage.getItem(KEY);
if (salvo && salvo.length > 100) {
container.innerHTML = salvo;
}
// Torna texto editável (sem quebrar layout)
container.querySelectorAll("div, span, p").forEach(el => {
el.contentEditable = "true";
});
// Salva alterações com proteção
container.addEventListener("input", () => {
const html = container.innerHTML.trim();
if (html.length > 100) {
localStorage.setItem(KEY, html);
}
});
