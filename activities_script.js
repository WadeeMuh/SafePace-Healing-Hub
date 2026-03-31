function openNav() {
  document.getElementById('sideNav').classList.add('open');
  document.getElementById('navOverlay').classList.add('open');
}
function closeNav() {
  document.getElementById('sideNav').classList.remove('open');
  document.getElementById('navOverlay').classList.remove('open');
}

// breathing gifs
let current = 0;
const gif = document.getElementById('breathingGif');
const dots = document.getElementById('exerciseDots');
gif.src = 'images/breathing_exercises/exercise1.gif';

for (let i = 0; i < 5; i++) {
  const dot = document.createElement('button');
  dot.className = 'exercise-dot' + (i === 0 ? ' active' : '');
  dot.onclick = () => go(i);
  dots.appendChild(dot);
}

function go(i) {
  current = i;
  gif.src = 'images/breathing_exercises/exercise' + (i + 1) + '.gif';
  dots.querySelectorAll('.exercise-dot').forEach((dot, j) => dot.classList.toggle('active', j === i));
}

document.getElementById('prevBtn').onclick = function() {
  if (current === 0) {
    go(4);
  } else {
    go(current - 1);
  }
};
document.getElementById('nextBtn').onclick = function() {
  if (current === 4) {
    go(0);
  } else {
    go(current + 1);
  }
};

const tasks = [
  'Put both hands on your heart',
  'Walk slowly for a few minutes',
  'Lie down and let your body rest',
  'Name 5 things you can see right now',
  'Hum or sing any song you know',
  'Trace your hand with one finger',
  'Say something kind to yourself',
  'Remember one good moment',
  'Think of someone who loves you',
  'Draw something, any way you can',
];

let lastTask = -1;

function generateTask() {
  let randomNumber = Math.floor(Math.random() * tasks.length);

  while (randomNumber === lastTask) {
    randomNumber = Math.floor(Math.random() * tasks.length);
  }

  lastTask = randomNumber;

  const card = document.getElementById('taskCard');
  card.style.opacity = '0';

  setTimeout(function() {
    document.getElementById('taskText').textContent = tasks[randomNumber];
    card.style.opacity = '1';
  }, 200);
}