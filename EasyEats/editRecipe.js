$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const recipeId = parseInt(urlParams.get('id'));
  
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const recipe = recipes.find(r => r.id === recipeId);
  
    if (recipe) {
      $('#recipe-name').val(recipe.title);
      $('#recipe-description').val(recipe.description);
      $('#recipe-image').val(recipe.imageUrl); // Corregido ID
      $('#prep-time').val(recipe.prepTime);
      $('#difficulty').val(recipe.difficulty);
      $('#recipe-ingredients').val(recipe.ingredients.map(ingredient => `${ingredient.name}, ${ingredient.quantity}, ${ingredient.unit}`).join('\n'));
      $('#recipe-steps').val(recipe.steps.join('\n'));
      $('#dietary-preferences').val(recipe.dietaryRestrictions.length > 0 ? recipe.dietaryRestrictions.join(',') : 'No dietary preferences');
    } else {
      console.error('Recipe not found');
    }
  
    // Handle form submission for editing a recipe
    $('#edit-recipe-form').on('submit', function(event) {
      event.preventDefault();
  
      const title = $('#recipe-name').val();
      const description = $('#recipe-description').val();
      const steps = $('#recipe-steps').val().split('\n');
      const difficulty = $('#cooking-skill').val();
      const prepTime = $('#prep-time').val();
      const imageUrl = $('#recipe-image').val(); // Corregido ID
      const ingredients = $('#recipe-ingredients').val().split('\n').map(ingredient => {
        const parts = ingredient.split(',');
        if (parts.length === 3) {
          const [name, quantity, unit] = parts;
          return { name: name.trim(), quantity: quantity.trim(), unit: unit.trim() };
        } else {
          console.error(`Invalid ingredient format: ${ingredient}`);
          return null;
        }
      }).filter(ingredient => ingredient !== null);
      const dietaryRestrictions = $('#dietary-preferences').val().split(',').map(restriction => restriction.trim());
  
      const updatedRecipe = {
        id: recipeId,
        title,
        description,
        steps,
        difficulty,
        prepTime,
        ingredients,
        dietaryRestrictions: dietaryRestrictions[0] === 'No dietary preferences' ? [] : dietaryRestrictions,
        imageUrl
      };
  
      const recipeIndex = recipes.findIndex(r => r.id === recipeId);
      if (recipeIndex !== -1) {
        recipes[recipeIndex] = updatedRecipe;
        localStorage.setItem('recipes', JSON.stringify(recipes));
        console.log('Recipe updated in localStorage:', JSON.parse(localStorage.getItem('recipes'))); // Debugging line
  
        // Redirect to recipe.html with the ID of the updated recipe
        window.location.href = `recipe.html?id=${recipeId}`;
      } else {
        console.error('Recipe not found in localStorage');
      }
    });
  });
  