window.addEventListener('load', (e) => setTop());

window.addEventListener('scroll', (e) => setTop(), {
  capture: false,
  passive: true,
});

function setTop() {
  let array = document.getElementsByClassName('logo');
  array[0].style.top =
    50 - array[0].parentElement.getBoundingClientRect().top + 'px';
  array[1].style.top =
    50 - array[1].parentElement.getBoundingClientRect().top + 'px';
  array[2].style.top =
    50 - array[2].parentElement.getBoundingClientRect().top + 'px';
}
