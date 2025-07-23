document.querySelectorAll('.tabs button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });
    const pageId = button.getAttribute('data-page');
    const targetPage = document.getElementById(pageId);
    targetPage.classList.add('active');

    const flip = new Audio('flip.mp3');
    flip.play();
  });
});

