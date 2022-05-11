import './style.css';

// const refreshBtn = document.querySelector('.refresh');
// const form = document.querySelector('form');

const data = { "name": "Hammed Game" };
/*
fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0wasy4f9wnQ6KNT6X9R5/scores/', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
*/


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