import './style.css';

const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameID = '81kYyJKWPP59Yc9k4NXm'; //
const requestURL = `${baseURL}${gameID}/scores/`;

const userName = document.querySelector('#userName');
const userScore = document.querySelector('#userScore');
const form = document.querySelector('.form-scores');
const inputs = document.querySelectorAll('input');
const confirmationMsg = document.querySelector('.error-msg');
const scoreList = document.querySelector('#score-list');

const setScore = async () => {
  await fetch(requestURL, {
    method: 'POST',
    body: JSON.stringify({
      user: userName.value,
      score: userScore.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      confirmationMsg.innerText = json.result;
      confirmationMsg.classList.add('active');
    });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (userName.value && userScore.value) {
    setScore();
    userName.value = '';
    userScore.value = '';
  }
});

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    confirmationMsg.innerText = '';
    confirmationMsg.classList.remove('active');
  });
});

const createList = async () => {
  await fetch(requestURL)
    .then((response) => response.json())
    .then((json) => {
      scoreList.innerHTML = `${json.result.sort((a, b) => b.score - a.score).
        map((score, index) => `<li class="scoreItem">${score.user}: ${score.score}</li>`).join('')}`;
    });
};

createList();

const refreshBtn = document.querySelector('.refresh');
refreshBtn.addEventListener('click', () => {
  createList();
});
