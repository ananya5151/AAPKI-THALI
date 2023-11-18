import fetch from 'node-fetch';

const url = 'https://api.example.com/data.json'; // Replace with your JSON file URL

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(jsonData => {
    console.log('JSON data:', jsonData);
    // Process jsonData as needed
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });