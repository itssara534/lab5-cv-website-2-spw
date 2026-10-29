
const sections = document.querySelectorAll('.content .block');
const links = document.querySelectorAll('#sideNav a');

// Show one section at a time
function showTab(id) {
  sections.forEach(section => {
    const isActive = section.id === id;

    section.classList.toggle('active-tab', isActive);
    section.classList.toggle('show', isActive);
    section.setAttribute('aria-hidden', String(!isActive));
  });

  links.forEach(link => {
    const isActive = link.getAttribute('href') === '#' + id;

    link.classList.toggle('active', isActive);

    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

// Sidebar tab clicks
links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const id = link.getAttribute('href').slice(1);
    showTab(id);
  });
});

// Open Profile by default
showTab('profile');

// Footer year
document.getElementById('year').textContent =
  new Date().getFullYear();
