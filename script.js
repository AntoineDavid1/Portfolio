window.addEventListener('scroll', function() {
    const scrollElement = document.getElementById('navbar');
    
    // Vérifie si la page est en bas ou en haut
    if (window.scrollY > 100) {
        // Ajoute la classe 'visible' pour le rendre visible avec la transition
        scrollElement.classList.add('visible');
      } else {
        // Enlève la classe 'visible' pour le cacher avec la transition
        scrollElement.classList.remove('visible');
      }
    });

    const swiper = new Swiper('.swiper', {
      loop: true, // Le carrousel boucle en continu
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
  });

document.getElementById("scrol").addEventListener(click, ()=>{
  const target = document.getElementById('carteChronologique');
    if (target) {
        console.log("scrolle activé");
        target.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
})
  