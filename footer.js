fetch("/footer.html")
    .then(res => res.text()) 
    .then(html => {
      const footerEl = document.createElement("footer");
      footerEl.innerHTML = html;  
      document.body.appendChild(footerEl);
    });

