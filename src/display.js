const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameID = '81kYyJKWPP59Yc9k4NXm';
const requestURL = `${baseURL}${gameID}/scores/`;
const scoreList = document.querySelector('#score-list');

const createList = async () => {
  await fetch(requestURL)
    .then((response) => response.json())
    .then((json) => {
      scoreList.innerHTML = `${json.result.sort((a, b) => b.score - a.score)
        .map((score) => `<li class="scoreItem">${score.user}: ${score.score}</li>`).join('')}`;
    });
};

export default createList;