import {
  listPage, AddPage, contactPage,
} from './ui.js';

const navBar = document.querySelectorAll('.item-link');
navBar.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.id === 'list') {
      listPage.style.display = 'block';
      AddPage.style.display = 'none';
      contactPage.style.display = 'none';
    } else if (item.id === 'add') {
      listPage.style.display = 'none';
      AddPage.style.display = 'block';
      contactPage.style.display = 'none';
    } else if (item.id === 'contact') {
      contactPage.style.display = 'block';
      listPage.style.display = 'none';
      AddPage.style.display = 'none';
    }
  });
});

export { navBar as default };