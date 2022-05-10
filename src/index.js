import './style.css';

let scores = [];
const addButton = document.querySelector('#add-score');
const scoreList = document.querySelector('#score-list');

const displayScore = (id, name, score) => {
  const li = document.createElement('li');
  const br = document.createElement('br');

  li.innerHTML = `
      <p>${name}: </p>
      <p>${score}</p>
      <br>
      <div class="hr"></div>
    `;
  li.appendChild(br);
  scoreList.appendChild(li);
};

const ErrorMsg = (error) => {
  document.querySelector('.error-msg').innerHTML = error;
  setTimeout(() => {
    document.querySelector('.error-msg').innerHTML = '';
  }, 2000);
};

const addScores = (name, score) => {
  const id = Date.now();
  const object = { id, name, score };
  if (name === '' || score === '') {
    ErrorMsg('Kindly fill the fields');
  } else {
    scores.push(object);
    localStorage.setItem('score', JSON.stringify(scores));
    document.getElementById('userName').value = '';
    document.getElementById('userScore').value = '';
    displayScore(object.id, object.name, object.score);
  }
};

const getScoreFromStorage = JSON.parse(localStorage.getItem('score'));
if (getScoreFromStorage) {
  scores = getScoreFromStorage;
}

scores.forEach((index) => {
  displayScore(index.id, index.name, index.score);
});

document.addEventListener('DOMContentLoaded', () => {
  addButton.addEventListener('click', (n) => {
    n.preventDefault();
    const name = document.getElementById('userName').value;
    const score = document.getElementById('userScore').value;
    addScores(name, score);
  });
});

if (scoreList !== null) {
  scoreList.classList.add('list-border');
} else {
  scoreList.classList.remove('list-border');
};