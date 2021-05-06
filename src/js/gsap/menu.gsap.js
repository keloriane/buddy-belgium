let open = false;
const menu = document.getElementById('menu-burger');
const close = document.getElementById('close');

const menuButton = document.getElementById('burger__menu');
menuButton.addEventListener('click', function (e) {
  console.log(e.target);
  open = !open;
  if (open === true) {
    menu.style.display = 'block';
  } else if (open === false) {
    menu.style.display = 'none';
  }
});
close.addEventListener('click', function () {
  if (open === false) {
  }
});
