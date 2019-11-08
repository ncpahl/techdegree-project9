

//change jumbotron background on scroll

const head = document.getElementById('head');
window.addEventListener('scroll', function () {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    head.classList.remove('jumbotron');
    head.classList.add('jumbotron-2');
  }
});

//typeWriter
var i = 0;
var txt = 'nicole pahl'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeit").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener('DOMContentLoaded', typeWriter);
