import { requestURL, scoreList } from './index.js';

const createList = async () => {
  await fetch(requestURL)
    .then((response) => response.json())
    .then((json) => {
      scoreList.innerHTML = `${json.result.sort((a, b) => b.score - a.score)
        .map((score) => `<li class="scoreItem">${score.user}: ${score.score}</li>`).join('')}`;
    });
};

export default createList;