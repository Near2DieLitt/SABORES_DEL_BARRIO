document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LÓGICA DE LOS BOTONES AGREGAR (CARRITO) ---
    const badgeCarrito = document.querySelector('.badge.bg-danger');
    const botonesAgregar = document.querySelectorAll('.btn-agregar, .btn-pedir-ahora');
    let contadorCarrito = 0;

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            contadorCarrito++;
            badgeCarrito.textContent = contadorCarrito;
            const textoOriginal = boton.innerHTML;
            boton.innerHTML = `<i class="bi bi-check-lg"></i> Listo`;
            setTimeout(() => {
                boton.innerHTML = textoOriginal;
            }, 1000);
        });
    });

    // --- 2. LÓGICA DEL CARRUSEL (MOVIMIENTO) ---
    // Nuestra lista de platos
    const platos = [
        {
            img: 'https://images.unsplash.com/photo-1548943487-a2e4d43b4859?q=80&w=1200&auto=format&fit=crop',
            title: 'Caldillo del<br>Barrio',
            desc: 'Mariscos, tomate, hierbas frescas y caldo de la casa'
        },
        {
            img: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=1200&auto=format&fit=crop',
            title: 'Huevos del<br>Barrio',
            desc: 'Huevos de campo, pan tostado y salsa casera'
        },
        {
            img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop',
            title: 'Tostada<br>Mediterránea',
            desc: 'Tomates, palta y semillas tostadas'
        }
    ];

    let currentIndex = 0;

    // Conectar HTML con JS
    const imgCenter = document.getElementById('img-center');
    const titleCenter = document.getElementById('title-center');
    const descCenter = document.getElementById('desc-center');
    const imgLeft = document.getElementById('img-left');
    const imgRight = document.getElementById('img-right');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    function actualizarCarrusel() {
        // Calcular qué plato va a la izquierda y cuál a la derecha (carrusel infinito)
        let prevIndex = (currentIndex === 0) ? platos.length - 1 : currentIndex - 1;
        let nextIndex = (currentIndex === platos.length - 1) ? 0 : currentIndex + 1;

        // Efecto visual: desvanecer, cambiar texto/foto, y volver a aparecer
        imgCenter.style.opacity = 0;
        titleCenter.style.opacity = 0;
        descCenter.style.opacity = 0;
        
        setTimeout(() => {
            // Cambiar imagen central y textos
            imgCenter.src = platos[currentIndex].img;
            titleCenter.innerHTML = platos[currentIndex].title;
            descCenter.textContent = platos[currentIndex].desc;
            
            // Cambiar imágenes de los lados
            imgLeft.src = platos[prevIndex].img;
            imgRight.src = platos[nextIndex].img;

            // Volver a mostrar
            imgCenter.style.opacity = 0.75; // La imagen es un poco oscura por diseño
            titleCenter.style.opacity = 1;
            descCenter.style.opacity = 1;
        }, 300); // 300ms debe coincidir con la transición del CSS
    }

    // Botón Siguiente
    if(btnNext && btnPrev) {
        btnNext.addEventListener('click', () => {
            currentIndex = (currentIndex === platos.length - 1) ? 0 : currentIndex + 1;
            actualizarCarrusel();
        });

        // Botón Anterior
        btnPrev.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? platos.length - 1 : currentIndex - 1;
            actualizarCarrusel();
        });
    }
});