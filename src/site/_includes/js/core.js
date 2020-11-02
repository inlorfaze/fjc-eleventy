// simple button click event handler
function btnHandler(selector, callback) {
  var btn = document.querySelector(selector);
  if(!btn) { return; }
  btn.addEventListener('click', function(event) {
    event.preventDefault();
    callback();
  }, false);
}

// gsap.fromTo('.overlay', {zIndex: 1, opacity: 1}, {duration:1, zIndex:-1, opacity:0, ease:'power1.in' });

// gsap.from('#wrapper', {duration:0.8, opacity:0});

// var srConfig = {
//   easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
//   delay: 100, 
//   duration:500,
//   distance: '20px',
// }
// ScrollReveal().reveal('.hero', srConfig);
// ScrollReveal().reveal('.work-card', srConfig);
// ScrollReveal().reveal('.project-card', srConfig);
