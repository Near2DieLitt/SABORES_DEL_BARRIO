document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar elementos del DOM
    const btnPedir = document.querySelector('.btn-warning');
    const badgeCarrito = document.querySelector('.badge.bg-danger');
    let contadorCarrito = 0;

    // Agregar evento de click al botón "Pedir ahora"
    if(btnPedir && badgeCarrito) {
        btnPedir.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Incrementar contador
            contadorCarrito++;
            badgeCarrito.textContent = contadorCarrito;

            // Pequeña animación visual en el botón
            btnPedir.innerHTML = `¡Agregado! <i class="bi bi-check-circle-fill"></i>`;
            setTimeout(() => {
                btnPedir.innerHTML = `Pedir ahora <i class="bi bi-bag"></i>`;
            }, 1500);
        });
    }
});