// Animación de scroll suave para la navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Funcionalidad para secciones desplegables
const collapsibles = document.querySelectorAll('.collapsible h2');
collapsibles.forEach(collapsible => {
    collapsible.addEventListener('click', () => {
        const content = collapsible.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
