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
