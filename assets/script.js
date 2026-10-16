const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}
const form = document.getElementById('enquiry-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent('KARMIX Technology Enquiry — ' + data.get('service'));
    const body = encodeURIComponent(
      'Name: ' + data.get('name') + '\n' +
      'Email: ' + data.get('email') + '\n' +
      'Phone: ' + data.get('phone') + '\n' +
      'Service: ' + data.get('service') + '\n\n' +
      'Message:\n' + data.get('message')
    );
    const note = document.getElementById('form-note');
    if (note) { note.style.display = 'block'; note.textContent = 'Opening your email app with the enquiry details…'; }
    window.location.href = 'mailto:karmixtechnology@gmail.com?subject=' + subject + '&body=' + body;
  });
}
