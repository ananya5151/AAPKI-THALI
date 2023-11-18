import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.get('/recipes', async (req, res) => {
  const selectedState = req.query.state;
  const accessToken = 'YOUR_ACCESS_TOKEN'; // Replace with your actual access token

  const recipeDBEndpoint = `https://api.recipe-db.com/api/v1/recipes?state=${selectedState}`;

  try {
    const response = await fetch(recipeDBEndpoint, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from RecipeDB API');
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching recipes from RecipeDB:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
