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

function sendToWhatsApp() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var telephone = document.getElementById("telephone").value;
    var order = document.getElementById("order").value;
    var ownerPhone = "27605505969"; // BABALO
    var url = "https://wa.me/" + ownerPhone + "?text=" + encodeURIComponent("Name: " + name + "\nSurname: " + surname + "\nUser Phone: " + telephone + "\nOrder: " + order);
    window.open(url, '_blank').focus();const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

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


function addToCart(productName, productPrice, productImage) {
    const cartItems = document.getElementById("cartItems");
    const item = document.createElement("div");
    item.className = "cart-item";
    item.innerHTML = `
    <img src="${productImage}" alt="${productName}" class="cart-item-image">
        <p>${productName} - ${productPrice} </p> 
         <input type="number" class="quantity-input" value="1" min="1" onchange="updateTotal()">
        <button class="remove-btn" onclick="removeFromCart(this)">Remove</button>
        `;
    cartItems.appendChild(item);
    updateTotal();
    closeSizeOptions();
}

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