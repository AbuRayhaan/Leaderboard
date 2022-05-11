import './style.css';

const refreshBtn = document.querySelector('.refresh');
const form = document.querySelector('form');

const createScore = (val) => {
  const scoreList = document.querySelector('#score-list');
  scoreList.innerHTML = '';

  val.foreach((game, index) => {
    const li = document.createElement('li');
    li.textContent = `${game.user}: ${game.score}`;
    li.id = index;
    scoreList.appendChild(li);
  });
};

const getScore = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0wasy4f9wnQ6KNT6X9R5/scores/');
  const { data } = await response.json();
  return data;
}

const setScore = async (score) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0wasy4f9wnQ6KNT6X9R5/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  });

  const { data } = await response.json();
  return data;
};

const displayScores = async () => {
  const result = await getScore();
  createScore(result);
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const { userName, userScore } = form.elements;
  const game = { user: userName.value, score: userScore.value };
  form.reset();
  await setScore(game);
  displayScores();
});

refreshBtn.addEventListener('click', displayScores);