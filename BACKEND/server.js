import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.get('/recipes', async (req, res) => {
  const selectedState = req.query.state;
  const accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1N1R4M2FWRzR0N0Q5YW00TDlod1VHR2tPVVlvOUpwVFd1VTNmTWxrY1lBIn0.eyJleHAiOjE3MDAyODIzODgsImlhdCI6MTcwMDI4MjA4OCwianRpIjoiNTczMzQzMmMtOWU2Yi00NmNiLWJhZDItOTI3NDkyZGQxZDU5IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvcmVhbG1zL2Jvb3RhZG1pbiIsImF1ZCI6WyJhcHAtYWRtaW4iLCJhcHAtdG9kbyIsImFjY291bnQiXSwic3ViIjoiMmEzNzU0NzAtMjU4Ni00MDM4LWEzODUtMTY1OGMxOGVjMTJhIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYXBwLWltcyIsInNlc3Npb25fc3RhdGUiOiI0MzlkNmJhZC1lNTcwLTQyZDgtYmZkZi1kZmNiYjg4MGI4YjAiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhcHAtYWRtaW4iOnsicm9sZXMiOlsiYWRtaW4iXX0sImFwcC10b2RvIjp7InJvbGVzIjpbImFkbWluIiwidXNlciJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiZm9ya2l0LWhhY2thdGhvbiJ9.YgEJDsYchiTltDYzGO0_aSVigbPCLijMjLTJRvhzjIbVbAKvBYHRkqpMcUU3KnY19HeHJb7ZULfGcAlw11OfZISBvSLU0DrIGhgVFANWynM1ZDX3e3YuyYljzqtn62bN7FXK-vfVakW8vJNq9Ikwra5hgaxhvQgSuSB_1tpmKs2NnqU1mc7lLMuU6Qvj9kG9tUd1Y_pFUe-ITRHaebwgONlVXBH_kr3Peip0tl0Snt_vzvGvAfe6K5HrSp3g6-Uqw_3-mDktqI_c-FT1ypwNvYZvmiwGdofyeWwOCLzFwwksMd3NjIJDs8eXqloGNUv0YkbU1bkZGpvTcg-fww5fIg'; // Replace with your actual access token

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
