let score = [];
const addScore = document.querySelector('#add-score');
const scoreList = document.querySelector('#board-list');

const displayScores = (id, name, score) => {
  const li = document.createElement('li');
  const br = document.createElement('br');

  li.innerHTML = `
  <p>${name}</p>
  <p>${score}</p>
  <br>
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

const addScore = (name, score) => {
  const id = Date.now();
  const object = { id, name, score };

  if (name === '' || score === '') {
      ErrorMsg('Kindly fill the fields');
  } else {
      score.push(object);
      localStorage.setItem('score', JSON.stringify(score));
      document.getElementById('userName').value = '';
      document.getElementById('userScore').value = '';
      displayScores(object.id, object.name, object.score);
  }
}

const getScoreFromStorage = JSON.parse(localStorage.getItem('score'));
if (getScoreFromStorage) {
  score = getScoreFromStorage;
}

score.forEach((i) => {
  displayScores(i.id, i.name, i.score);
});

document.addEventListener('DOMContentLoaded', () => {
  addScore.addEventListener('click', (n) => {
      n.preventDefault();
      const name = document.getElementById('userName').value;
      const score = document.getElementById('userScore').value;
      addScore(name, score);
  });
});