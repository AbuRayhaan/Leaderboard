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

export default displayScore;