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
  