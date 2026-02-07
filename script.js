fetch('nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;
    addEventListeners(); 
  });

function addEventListeners() {
  // Menu button for mobile
  const menuButton = document.querySelector('.menu-button');
  if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
  }

  // Submenu click for all devices
  const submenus = document.querySelectorAll('.has-submenu > a');
  submenus.forEach(submenu => {
    submenu.addEventListener('click', toggleSubmenu);
  });
}

function toggleMenu() {
  const sidenav = document.querySelector('.sidenav');
  sidenav.classList.toggle('show');
}

function toggleSubmenu(event) {
  event.preventDefault(); 
  const submenuParent = event.target.parentElement;
  submenuParent.classList.toggle('open'); 
}


function showSubmenu(event) {
  if (window.innerWidth > 768) {
    this.querySelector('ul').style.display = 'block';
  }
}

function hideSubmenu(event) {
  if (window.innerWidth > 768) {
    this.querySelector('ul').style.display = 'none';
  }
}
