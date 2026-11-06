
// MENU MOBILE
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const aberto = nav.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", aberto);
  menuToggle.textContent = aberto ? "✕" : "☰";
});

// FECHAR MENU AO CLICAR EM UM LINK
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// INTERAÇÃO DE HUMOR
const moodButtons = document.querySelectorAll(".mood-options button");
const moodMessage = document.getElementById("moodMessage");

moodButtons.forEach(button => {
  button.addEventListener("click", () => {
    moodButtons.forEach(item => item.classList.remove("selected"));

    button.classList.add("selected");
    moodMessage.textContent = button.dataset.message;
  });
});

// FORMULÁRIO DE FEEDBACK
const feedbackForm = document.getElementById("feedbackForm");
const formStatus = document.getElementById("formStatus");

feedbackForm.addEventListener("submit", event => {
  event.preventDefault();

  const tipo = document.getElementById("feedbackType").value;
  const mensagem = document.getElementById("feedbackMessage").value.trim();
  const email = document.getElementById("feedbackEmail").value.trim();

  if (!tipo || !mensagem) {
    formStatus.textContent = "Preencha os campos obrigatórios.";
    formStatus.className = "form-status error";
    return;
  }

  // O envio real será conectado ao Supabase na próxima etapa.
  formStatus.textContent =
    "O formulário está pronto! O recebimento das mensagens ainda precisa ser conectado ao sistema de armazenamento.";

  formStatus.className = "form-status success";

  console.log("Feedback preenchido:", {
    tipo,
    mensagem,
    email
  });
});
