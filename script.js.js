document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const producto = button.parentElement;
        const nombre = producto.querySelector('h3').innerText;
        const precio = producto.querySelector('.precio').innerText;

        alert(Has añadido ${nombre} al carrito por ${precio});
    });
});

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const oferta = button.parentElement;
        const nombre = oferta.querySelector('h3').innerText;
        const precio = oferta.querySelector('.precio-oferta').innerText;

        alert(Has añadido ${nombre} al carrito por ${precio});
    });
});


function mostrarMensaje() {
    alert("El producto ha sido añadido al carrito.");
}