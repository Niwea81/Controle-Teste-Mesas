// Identificador único da planilha
const STORAGE_KEY = "planilha_controle_dolarize_2024";

// Seleciona todas as células
const cells = document.querySelectorAll("td");

// Torna todas editáveis
cells.forEach((cell, index) => {
  cell.contentEditable = "true";
  cell.dataset.cellId = index;

  // Restaura valor salvo
  const saved = localStorage.getItem(STORAGE_KEY + index);
  if (saved !== null) {
    cell.innerHTML = saved;
  }

  // Salva ao editar
  cell.addEventListener("input", () => {
    localStorage.setItem(STORAGE_KEY + index, cell.innerHTML);
  });
});

// Proteção simples contra perda acidental
window.addEventListener("beforeunload", () => {
  console.log("Dados salvos automaticamente");
});

