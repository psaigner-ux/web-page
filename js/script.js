// Espera a que todo el HTML de la página esté cargado
document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos todos los botones de las preguntas
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      // Obtenemos el contenedor padre (.faq-item) de la pregunta pulsada
      const faqItem = question.parentElement;
      const icon = question.querySelector(".icon-circle");

      // Comprobamos si este elemento ya está activo
      const isActive = faqItem.classList.contains("active");

      // [OPCIONAL] Cerrar las otras preguntas abiertas al abrir una nueva
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active");
        const itemIcon = item.querySelector(".icon-circle");
        if (itemIcon) itemIcon.textContent = "+";
      });

      // Si no estaba activo, lo activamos y cambiamos el icono a "-"
      if (!isActive) {
        faqItem.classList.add("active");
        icon.textContent = "−"; // Signo menos elegante
      } else {
        // Si ya estaba activo, al hacer clic se cierra
        icon.textContent = "+";
      }
    });
  });
});