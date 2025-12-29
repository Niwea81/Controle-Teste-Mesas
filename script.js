const STORAGE_KEY = "controle_teste_mesas";

// torna todas as células editáveis
document.querySelectorAll("td").forEach((td) => {
  td.contentEditable = true;
});

// restaura se houver dados salvos
const salvo = localStorage.getItem(STORAGE_KEY);
if (salvo) {
  document.querySelector(".planilha-container").innerHTML = salvo;
}

// salva ao editar
document.addEventListener("input", () => {
  const html = document.querySelector(".planilha-container").innerHTML;
  localStorage.setItem(STORAGE_KEY, html);
});

