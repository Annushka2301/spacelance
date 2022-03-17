(() => {

  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__nav');
  const postBtn = document.querySelector('.header__btn');

  burger.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
    postBtn.classList.toggle('show-menu');
  });

  document.addEventListener('click', (e) => {
    if (!e.composedPath().includes(burger)) {
      menu.classList.remove('show-menu');
      postBtn.classList.remove('show-menu');
    }
  });


})();
