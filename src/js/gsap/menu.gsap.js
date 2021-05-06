let open = false;
const menu = document.getElementById('menu-burger');
const close = document.getElementById('close');

const menuButton = document.getElementById('burger__menu');
close.addEventListener('click', function () {
  open = false;
  menu.style.display = 'none';
});
menuButton.addEventListener('click', function (e) {
  open = !open;
  console.log(open);
  if (open === true) {
    menu.style.display = 'block';
  }
});
