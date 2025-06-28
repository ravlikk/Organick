const btn = document.getElementById('submit');
const text = document.querySelector('.modal__message');
const content = document.querySelector('.modal__content');
const closeModalBtn = document.querySelector('.modal__cancel');
const logText = document.querySelector('.header__registration p');
const userIcon = document.querySelector('.header__user-item');

btn.addEventListener('click', () => {
    content.classList.add('hidden');
    closeModalBtn.classList.add('hidden');
  text.classList.add('visible');

  setTimeout(() => {
    modal.classList.remove('active');
  }, 1000)
    
  logText.classList.add('hidden');
  userIcon.classList.add('visible');
  
});
