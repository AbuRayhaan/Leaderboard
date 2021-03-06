import './style.css';
import createList from './display.js';
import ErrorMsg from './error.js';

const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameID = '81kYyJKWPP59Yc9k4NXm'; //
const requestURL = `${baseURL}${gameID}/scores/`;

const userName = document.querySelector('#userName');
const userScore = document.querySelector('#userScore');
const form = document.querySelector('.form-scores');
const inputs = document.querySelectorAll('input');
const confirmationMsg = document.querySelector('.error-msg');
const addButton = document.querySelector('#add-score');

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

addButton.addEventListener('click', (n) => {
  n.preventDefault();
  if (userName.value === '' || userScore.value === '') {
    ErrorMsg('Kindly fill the fields');
  } else {
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

createList();

const refreshBtn = document.querySelector('.refresh');
refreshBtn.addEventListener('click', () => {
  createList();
});