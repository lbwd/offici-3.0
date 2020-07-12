window.addEventListener('load', (e) => setTop());

window.addEventListener('scroll', (e) => setTop(), {
  capture: false,
  passive: true,
});

function setTop() {
  let firstTop =
    50 -
    document.getElementsByClassName('screen-black')[0].getBoundingClientRect()
      .top +
    'px';
  document.getElementsByClassName('logo-white')[0].style.top = firstTop;

  document.getElementsByClassName('logo-black')[0].style.top =
    'calc(' + firstTop + ' - 100vh)';

  document.getElementsByClassName('logo-for-blue')[0].style.top =
    'calc(' + firstTop + ' - 200vh)';
}
