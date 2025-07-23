document.addEventListener('DOMContentLoaded', function() {
  const pages = document.querySelectorAll('.page');
  let currentPage = 0;

  function showPage(index) {
    pages.forEach((page, i) => {
      if (i === index) {
        page.classList.add('active');
        page.style.transform = 'rotateY(0deg)';
      } else {
        page.classList.remove('active');
        page.style.transform = 'rotateY(90deg)';
      }
    });
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
      currentPage = (currentPage + 1) % pages.length;
      showPage(currentPage);
    } else if (event.key === 'ArrowLeft') {
      currentPage = (currentPage - 1 + pages.length) % pages.length;
      showPage(currentPage);
    }
  });

  showPage(currentPage);
});
