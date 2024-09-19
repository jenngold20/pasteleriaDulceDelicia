let cartCount = 0;
const cartElement = document.getElementById('cart');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartElement.textContent = cartCount;
        button.textContent = 'Añadido';
        button.disabled = true;
        setTimeout(() => {
            button.textContent = 'Añadir al carrito';
            button.disabled = false;
        }, 2000);
    });
});
