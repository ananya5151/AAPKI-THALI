async function fetchRecipes() {
    var selectedState = document.querySelector('input[list="mylist"]').value;
  
    if (selectedState) {
      try {
        const response = await fetch(`http://localhost:3000/recipes?state=${selectedState}`);
        const data = await response.json();
  
        // Handle the data as needed (e.g., display recipes on the page)
        displayRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes from server:', error.message);
      }
    } else {
      alert("Please select a state before fetching recipes.");
    }
  }
  url ='https://cosylab.iiitd.edu.in/api/recipeDB/search_subregion/Bangladeshi';
  function displayRecipes(data) {
    // You can customize this part to display the fetched recipes on the page
    // For example, you might want to create new HTML elements, append them to the DOM, etc.
    // This is a simple example to log the recipes to the console
    console.log('Displaying recipes:', data);
  
    // You can also update the DOM with the fetched data
    // For example, update a div with id "recipe-container"
    // document.getElementById('recipe-container').innerHTML = JSON.stringify(data);
  }
  
  // Add other functions or modify existing ones as needed
  