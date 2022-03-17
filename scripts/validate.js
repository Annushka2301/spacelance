(() => {
  const searchInput = document.querySelector('.hero__search');
  const searhForm = document.querySelector('.hero__form')
  const validateComments = document.querySelector('.hero__comments');

  function showComment (comment) {
    validateComments.textContent = comment;
    validateComments.style = 'opacity:1';
    searchInput.style = 'outline:1px solid red';
  }

  function hideComment () {
    validateComments.style = 'opacity:0';
    searchInput.style = 'outline:none';
  }

  searhForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (searchInput.value.trim() === '') {
      showComment('What are you looking for?');
      setTimeout(hideComment, 2000);
    };
  });

  searchInput.addEventListener('input', hideComment);
})();
