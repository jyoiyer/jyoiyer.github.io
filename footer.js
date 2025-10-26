fetch("/footer.html")
  .then(res => res.text())
  .then(html => {
    const el = document.createElement("div");
    el.innerHTML = html;

    const footerContainer = document.querySelector(".footer-container"); // Define a specific container for the footer
    if (footerContainer) {
      footerContainer.appendChild(el);
    } else {
      console.error("No .footer-container element found!");
    }
  });
