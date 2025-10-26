fetch("/footer.html")
  .then(res => res.text())
  .then(html => {
    const el = document.createElement("div");
    el.innerHTML = html;
    document.body.appendChild(el);
  });
