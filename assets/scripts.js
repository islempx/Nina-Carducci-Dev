/*$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});*/
const buttons = document.querySelectorAll(".filters button");
const images = document.querySelectorAll(".gallery img");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    images.forEach(img => {
      if (filter === "all" || img.dataset.galleryTag === filter) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  });
});