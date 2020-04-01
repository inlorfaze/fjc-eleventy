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
ScrollReveal().reveal('.work-card', { delay: 100, duration:1000});
