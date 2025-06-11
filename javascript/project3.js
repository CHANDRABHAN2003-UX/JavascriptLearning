// project3.js
const clock = document.getElementById('clock');

if(clock){setInterval(function () {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
}