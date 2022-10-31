import fetch from 'node-fetch';
const url = 'https://api.github.com/users/github';

(async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    console.log(json.origin);
  } catch (error) {
    console.log(error);
  }
})();
