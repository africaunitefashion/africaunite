const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

document.addEventListener('click', function (event) {
    const isClickInside = toggleBtn.contains(event.target) || dropDownMenu.contains(event.target);
    
    if (!isClickInside) {
        dropDownMenu.classList.remove('open');
        toggleBtnIcon.classList = 'fa-solid fa-bars'; // Reset to menu icon
    }
});

document.querySelectorAll('.dropdown_menu a').forEach(link => {
    link.addEventListener('click', function () {
        dropDownMenu.classList.remove('open');
        toggleBtnIcon.classList = 'fa-solid fa-bars'; // Reset to menu icon
    });
});

function sendToWhatsApp() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var telephone = document.getElementById("telephone").value;
    var order = document.getElementById("order").value;
    var ownerPhone = "27605505969"; // BABALO
    var url = "https://wa.me/" + ownerPhone + "?text=" + encodeURIComponent("Name: " + name + "\nSurname: " + surname + "\nUser Phone: " + telephone + "\nOrder: " + order);
    window.open(url, '_blank').focus();
  }
  
  window.addEventListener('DOMContentLoaded', function () {
    const prices = document.querySelectorAll('.price');

    prices.forEach(price => {
        if (price.classList.contains('shirt-price')) {
            price.textContent = 'T-Shirt • R399'; 
        } else if (price.classList.contains('cap-price')) {
            price.textContent = 'Cap • R299'; 
        }
    });
});
  
  window.addEventListener('DOMContentLoaded', function () {
    const prices = document.querySelectorAll('.price');

    prices.forEach(price => {
        if (price.classList.contains('shirt-price')) {
            price.textContent = 'T-Shirt • R399'; 
        } else if (price.classList.contains('cap-price')) {
            price.textContent = 'Cap • R299'; 
        }
    });
});

window.addEventListener('DOMContentLoaded', function () {
    const prices = document.querySelectorAll('.price');

    prices.forEach(price => {
        let color = '';

        if (price.classList.contains('brown')) {
            color = 'Brown • ';
        } else if (price.classList.contains('black')) {
            color = 'Black • ';
        } else if (price.classList.contains('dark-brown')) {
            color = 'Dark Brown • ';
        }

        if (price.classList.contains('shirt-price')) {
            price.textContent = `${color}T-Shirt • R399`; 
        } else if (price.classList.contains('cap-price')) {
            price.textContent = `${color}Cap • R299`; 
        }
    });
});

function openCart() {
    document.getElementById("cartSidebar").style.width = "300px";
}

function closeCart() {
    document.getElementById("cartSidebar").style.width = "0";
}
let cartOpen = false; 

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartOpen) {
        cartSidebar.style.display = 'none'; // Hide cart
    } else {
        cartSidebar.style.display = 'block'; // Show cart
    }
    cartOpen = !cartOpen; // Toggle the state
}

document.querySelector('.cart-btn').addEventListener('click', toggleCart);
document.querySelector('.closebtn').addEventListener('click', toggleCart);

function addToCart(productName, productPrice, productImage, productSize) {
    let cartItems = document.getElementById("cartItems");
    let item = document.createElement("div");
    item.className = "cart-item";
    item.innerHTML = `
    <img src="${productImage}" alt="${productName}" class="cart-item-image">
        <p>${productName} - ${productPrice} -${productSize}</p> 
        <input type="number" class="quantity-input" value="1" min="1" max="5" onchange="updateTotal()">
        <button class="remove-btn" onclick="removeFromCart(this)">Remove</button>
    `;
    cartItems.appendChild(item);
    updateTotal();
    document.querySelectorAll('.size-options').forEach(option => option.style.display = 'none');
}
function showSizeOptions(button, name, price, image) {
    let sizeOptions = button.nextElementSibling;
    sizeOptions.style.display = 'block';

    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    let sizeButtonsHTML = '<p>Select a size:</p>';
    sizes.forEach(size => {
        sizeButtonsHTML += `<button onclick="addToCart('${name}', '${price}', '${image}', '${size}'); AddedToCart()">${size}</button>`;
    });

    
    sizeOptions.innerHTML = sizeButtonsHTML;
}


function AddedToCart() {
    const modal = document.createElement('div');
    modal.classList.add('modal');  
    modal.innerText = "Added To Cart";
    document.body.appendChild(modal);
    modal.style.position = 'fixed';
    modal.style.bottom = '20px';
    modal.style.left = '50%';
    modal.style.transform = 'translateX(-50%)';
    modal.style.backgroundColor = 'black';
    modal.style.color = 'white';
    modal.style.padding = '20px';
    modal.style.fontSize = '16px';
    modal.style.textAlign = 'center';
    modal.style.zIndex = '1000'; 
    modal.style.display = 'block';
    setTimeout(function() {
        modal.style.display = 'none';
        modal.remove();
    }, 2000);
}
function openCheckoutModal() {
    const cartItems = document.querySelectorAll('.cart-item');
    if (cartItems.length === 0) {
        alert("Your cart is empty! Add items to your cart before proceeding to checkout.");
        return;
    }

   
    document.getElementById('checkoutModal').style.display = 'flex';
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').style.display = 'none';
}

function sendOrder() {
    const name = document.getElementById("customerName").value;
    const email = document.getElementById("customerEmail").value;
    const phone = document.getElementById("customerPhone").value;

    if (!name || !phone) {
        alert("Please provide your name and phone number.");
        return;
    }

    // Get the cart items and format them for WhatsApp message
    const cartItems = document.querySelectorAll('.cart-item');
    let orderDetails = `Customer Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nOrder:\n`;

    cartItems.forEach(item => {
        const productName = item.querySelector('p').textContent.split(' - ')[0];
        const productPrice = item.querySelector('p').textContent.split(' - ')[1];
        const productSize = item.querySelector('p').textContent.split(' - ')[2];
        const quantity = item.querySelector('.quantity-input').value;
        orderDetails += `${productName} (${productSize}) - ${productPrice} x${quantity}\n`;
    });

    // Send the order details to WhatsApp
    const ownerPhone = "27605505969"; // Your WhatsApp number
    const url = `https://wa.me/${ownerPhone}?text=${encodeURIComponent(orderDetails)}`;
    window.open(url, '_blank').focus();

    clearCart();

    closeCheckoutModal();
}

function clearCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = ''; // Remove all items from the cart

    // Update total to 0 after clearing the cart
    updateTotal();
}

document.querySelector('.checkout-btn').addEventListener('click', openCheckoutModal);



function removeFromCart(button) {
    const item = button.parentElement;
    item.remove();
    updateTotal();
}

function updateTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;
    cartItems.forEach(item => {
        const priceText = item.querySelector('p').textContent;
        const price = parseFloat(priceText.split(' - R')[1]);
        const quantity = item.querySelector('.quantity-input').value;
        total += price * quantity;
    });
    document.getElementById('cartTotal').textContent = `Total: R${total.toFixed(2)}`;
}
