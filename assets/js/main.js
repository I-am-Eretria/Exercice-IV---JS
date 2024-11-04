/* 
Le background est gris. 3 icônes sont présentes :

- Lorsque l’on clique sur l’une des icônes :    - Le background prend sa couleur
                                                - Le nom du réseau social apparaît 
                                                - Les bords de l’icône s’arrondissent
                                                - Une ombre apparaît derrière l’icône.

- Lorsque l’on reclique sur une icône, le background redevient gris et l’icône reprend son aspect d’origine.
*/

const body_bg = document.querySelector("body");
const squares = document.querySelectorAll(".baseIcone");
const defaultBackgroundColor = "#2E3239"; // Couleur de fond par défaut

squares.forEach(square => {
    square.addEventListener('click', () => {
        // Toggle la classe 'active' pour gérer l'état de l'icône
        square.classList.toggle("active");

        // Récupère la couleur de fond 
        const bgColor = square.classList.contains("active") 
            ? window.getComputedStyle(square).background 
            : defaultBackgroundColor;

        // Applique la couleur de fond récupérée au body
        body_bg.style.background = bgColor;
        body_bg.style.backgroundRepeat = "no-repeat";       // Empêche la répétition
        body_bg.style.backgroundSize = "cover";             // Étend le dégradé sur tout le body
        body_bg.style.backgroundPosition = "center";        // Centre le dégradé

        // Récupère le nom du réseau social à partir de l'attribut data-name
        const socialName = square.getAttribute('data-name');
        const nameElement = square.querySelector('.social-name');

        // Met à jour le texte du réseau social
        if (square.classList.contains("active")) {
            nameElement.textContent = socialName; // Affiche le nom du réseau
        } else {
            nameElement.textContent = ""; // Efface le nom
        }
    });
});
