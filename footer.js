fetch("/footer.html")
  .then(res => res.text())
  .then(html => {
    const el = document.createElement("div");
    el.innerHTML = html;

    const sidenav = document.querySelector(".sidenav");
    if (sidenav) {
      sidenav.appendChild(el);
    } else {
      console.error("No .sidenav element found!");
    }
  });
