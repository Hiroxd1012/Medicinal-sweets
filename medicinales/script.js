let cart = [];
let total = 0;

function addToCart(name, price, image) {
    // Crear un objeto del producto
    const product = { name, price, image };

    // Agregarlo al carrito
    cart.push(product);

    // Actualizar el total
    total += price;

    // Actualizar la interfaz
    updateCart();
}

function removeFromCart(index) {
    // Restar el precio del producto del total
    total -= cart[index].price;

    // Eliminar el producto del carrito
    cart.splice(index, 1);

    // Actualizar la interfaz
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Limpiar el contenido del carrito

    cart.forEach((product, index) => {
        // Crear un contenedor para el producto
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        // Imagen del producto
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.classList.add('cart-item-image');

        // Nombre del producto
        const name = document.createElement('p');
        name.textContent = product.name;

        // Precio del producto
        const price = document.createElement('p');
        price.textContent = `$${product.price.toFixed(2)}`;

        // Botón de eliminar
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.onclick = () => removeFromCart(index);

        // Agregar todo al contenedor
        cartItem.appendChild(img);
        cartItem.appendChild(name);
        cartItem.appendChild(price);
        cartItem.appendChild(removeButton);

        // Añadir al carrito
        cartItems.appendChild(cartItem);
    });

    // Actualizar el total
    document.getElementById('total').textContent = total.toFixed(2);
}

function pay() {
    if (cart.length === 0) {
        alert('El carrito está vacío.');
        return;
    }

    alert(`Gracias por tu compra. El total es: $${total.toFixed(2)}`);
    cart = [];
    total = 0;
    updateCart();
}

// Datos de recetas
const recipes = {
    "miel-limon": {
        image: "imagenes/Caramelos de Miel y Limón.png",
        steps: [
            "Mezcla 1 taza de miel y el jugo de 2 limones en una sartén.",
            "Calienta a fuego lento hasta que alcance una textura espesa.",
            "Vierte en moldes pequeños y deja enfriar completamente antes de desmoldar."
        ]
    },
    "eucalipto-mentol": {
        image: "imagenes/Eucalipto Mentol(Descongestionante).webp",
        steps: [
            "Hierve hojas de eucalipto frescas en 2 tazas de agua durante 15 minutos.",
            "Añade 1 taza de azúcar y 1/2 taza de miel al líquido colado.",
            "Agrega 5 gotas de aceite esencial de menta, mezcla y vierte en moldes pequeños."
        ]
    },
    "vitamina-c": {
        image: "imagenes/Gomitas de Vitamina C.jpg",
        steps: [
            "Mezcla 1 taza de jugo de naranja natural con 1/4 de taza de gelatina sin sabor.",
            "Añade 1 cucharadita de vitamina C en polvo y endulza al gusto.",
            "Vierte la mezcla en moldes de silicona y refrigera hasta que solidifique."
        ]
    },
    "jengibre-miel": {
        image: "imagenes/Caramelos de Jengibre y Miel.webp",
        steps: [
            "Ralla 1 cucharada de jengibre fresco y exprime el jugo.",
            "Mezcla 1 taza de miel y el jugo de jengibre en una sartén.",
            "Calienta a fuego lento, vierte en moldes y deja enfriar completamente."
        ]
    },
    "regaliz": {
        image: "imagenes/Pastillas de Regaliz.jpg",
        steps: [
            "Hierve 1 cucharada de raíz de regaliz seca en 1 taza de agua durante 10 minutos.",
            "Cuela el líquido, añade 1 taza de azúcar y calienta hasta que espese.",
            "Vierte en moldes pequeños y deja endurecer."
        ]
    },
    "melatonina": {
        image: "imagenes/Gomitas de Melatonina.webp",
        steps: [
            "Mezcla 1 taza de jugo de fresa natural con 1/4 de taza de gelatina sin sabor.",
            "Añade melatonina en gotas según la dosis recomendada y mezcla bien.",
            "Vierte en moldes y refrigera hasta que estén firmes."
        ]
    },
    "propoleo": {
        image: "imagenes/Caramelos de Propóleo.jpg",
        steps: [
            "Disuelve 1 cucharadita de extracto de propóleo en 1 taza de miel.",
            "Calienta a fuego lento hasta que espese, removiendo constantemente.",
            "Vierte la mezcla en moldes pequeños y deja enfriar antes de desmoldar."
        ]
    },
    "nicotina": {
        image: "imagenes/Chicles de Nicotina.jpg",
        steps: [
            "Mezcla goma base (disponible en tiendas de repostería) con unas gotas de extracto de nicotina.",
            "Añade saborizante de menta o canela al gusto y mezcla bien.",
            "Forma los chicles y envuélvelos en papel encerado."
        ]
    },
    "multivitaminicas": {
        image: "imagenes/Gomitas Multivitamínicas.jpg",
        steps: [
            "Combina 1 taza de jugo mixto (mango, uva, etc.) con 1/4 de taza de gelatina sin sabor.",
            "Añade un suplemento multivitamínico en polvo y mezcla hasta disolver.",
            "Vierte la mezcla en moldes de silicona y refrigera."
        ]
    },
    "alacazuz-mentol": {
        image: "imagenes/Caramelos de Alcaçuz y Mento.png",
        steps: [
            "Hierve 1 cucharada de raíz de alcaçuz en 1 taza de agua por 10 minutos.",
            "Añade 1 taza de miel y unas gotas de aceite de mentol.",
            "Calienta hasta espesar, vierte en moldes y deja enfriar."
        ]
    }
};

// Mostrar modal con receta
function showRecipe(productId) {
    const modal = document.getElementById("recipe-modal");
    const recipe = recipes[productId];
    
    if (recipe) {
        document.getElementById("recipe-image").src = recipe.image;
        document.getElementById("recipe-details").innerHTML = recipe.steps
            .map((step, index) => `<p>${index + 1}. ${step}</p>`)
            .join("");
    }
    
    modal.style.display = "flex";
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById("recipe-modal");
    modal.style.display = "none";
}
