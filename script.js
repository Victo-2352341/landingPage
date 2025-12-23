const form = document.getElementById("emailForm");
const message = document.getElementById("formMessage");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = new FormData(form).get("email");

  let emails = JSON.parse(localStorage.getItem("labonnepaie_leads") || "[]");
  if (!emails.includes(email)) {
    emails.push(email);
    localStorage.setItem("labonnepaie_leads", JSON.stringify(emails));
  }

  message.textContent = "✅ Merci ! Vous serez averti dès le lancement.";
  form.reset();
});
