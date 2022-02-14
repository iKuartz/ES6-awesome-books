const bookshelf = document.getElementById('bookshelf');
const addBook = document.getElementById('add-book');
const contactInfo = document.getElementById('contact-info');
const newDate = document.querySelector('.date');

const menuList = document.querySelectorAll('.header-links');

// Setting the date
const d = new Date();
newDate.innerHTML = d.toUTCString();

export function handleNavigation(index) {
  if (menuList[index].innerHTML === 'List') {
    bookshelf.style.display = 'flex';
    addBook.style.display = 'none';
    contactInfo.style.display = 'none';
  }
  if (menuList[index].innerHTML === 'Add new') {
    bookshelf.style.display = 'none';
    addBook.style.display = 'flex';
    contactInfo.style.display = 'none';
  }
  if (menuList[index].innerHTML === 'Contact') {
    bookshelf.style.display = 'none';
    addBook.style.display = 'none';
    contactInfo.style.display = 'flex';
  }
}

menuList.forEach((element, index) => {
  element.addEventListener('click', () => {
    handleNavigation(index);
  });
});