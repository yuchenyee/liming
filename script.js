const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');

menuToggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
}));

const dialog = document.querySelector('#notice-dialog');
const noticeText = document.querySelector('#notice-text');
document.querySelector('.notice-dialog__close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});

function showNotice(message) {
  noticeText.textContent = message;
  dialog.showModal();
}

document.querySelectorAll('[data-video]').forEach(button => button.addEventListener('click', () => {
  showNotice('Video content is not included in the supplied homepage design.');
}));
document.querySelectorAll('[data-page]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  showNotice(`${link.dataset.page} content will be connected when the remaining pages are implemented.`);
}));
document.querySelector('#search-toggle').addEventListener('click', () => showNotice('Search will be available when the remaining pages are connected.'));
document.querySelector('#language-toggle').addEventListener('click', () => showNotice('Language versions will be available when the remaining pages are connected.'));
