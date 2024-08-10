const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  
  if (e.target.matches('.next')) {
    slider.append(items[0]);
  }
  
  if (e.target.matches('.prev')) {
    slider.prepend(items[items.length-1]);
  }

  // Supprimer la classe fullscreen de tous les éléments
  items.forEach(item => {
    item.classList.remove('fullscreen');
    const content = item.querySelector('.content');
    if (content) {
      content.style.color = ""; // Réinitialiser la couleur du texte
      content.style.zIndex = ""; // Réinitialiser le z-index
    }
  });

  // Ajouter la classe fullscreen à l'élément actuellement en focus
  const focusedItem = document.querySelector('.item:nth-child(2)'); // L'élément qui prend toute la page
  if (focusedItem) {
    focusedItem.classList.add('fullscreen');
    const content = focusedItem.querySelector('.content');
    if (content) {
      content.style.color = "white"; // Forcer la couleur du texte en blanc
      content.style.zIndex = "2"; // S'assurer que le texte est au-dessus de l'overlay
    }
  }
}

document.addEventListener('click', activate, false);

// Initialisation pour s'assurer que le premier élément en focus est stylé correctement
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');
  if (items.length > 0) {
    const focusedItem = items[1]; // Le premier élément plein écran
    focusedItem.classList.add('fullscreen');
    const content = focusedItem.querySelector('.content');
    if (content) {
      content.style.color = "white"; // Forcer la couleur du texte en blanc
      content.style.zIndex = "2"; // S'assurer que le texte est au-dessus de l'overlay
    }
  }
});

