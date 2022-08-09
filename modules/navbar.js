import {
navBar, listPage, AddPage, contactPage,
} from './ui.js';

navBar.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.id === 'list') {
      listPage.classList.add('active');
      contactPage.classList.add('active');
      AddPage.classList.remove('active');
      contactPage.style.display = 'none';
    } else if (item.id === 'add') {
      AddPage.classList.add('active');
      listPage.classList.remove('active');
      contactPage.style.display = 'none';
    } else if (item.id === 'contact') {
      contactPage.style.display = 'block';
      listPage.classList.remove('active');
      AddPage.classList.remove('active');
    }
  });
});

export default { navBar };