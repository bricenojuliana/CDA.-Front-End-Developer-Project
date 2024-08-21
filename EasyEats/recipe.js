$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = parseInt(urlParams.get('id'));

  const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
  const recipe = recipes.find(r => r.id === recipeId);

  if (recipe) {
    $('#recipe-name').text(recipe.title);
    $('#recipe-image').attr('src', recipe.imageUrl);
    $('#description').text(recipe.description);
    $('#prep-time').text(`Prep Time: ${recipe.prepTime} minutes`);
    $('#difficulty').text(recipe.difficulty);

    if (recipe.ingredients) {
      const ingredientsList = $('#ingredients-list');
      recipe.ingredients.forEach(ingredient => {
        ingredientsList.append(`<li>${ingredient.name} - ${ingredient.quantity} ${ingredient.unit}</li>`);
      });
    } else {
      console.log("Recipe ingredients is undefined");
    }

    if (recipe.steps) {
      const stepsList = $('#steps-list');
      recipe.steps.forEach(step => {
        stepsList.append(`<li>${step}</li>`);
      });
    } else {
      console.log("Recipe steps is undefined");
    }

    if (recipe.dietaryRestrictions) {
      const dietaryPreferencesList = $('#dietary-preferences-list');
      recipe.dietaryRestrictions.forEach(restriction => {
        dietaryPreferencesList.append(`<li>${restriction.name}</li>`);
      });
    } else {
      console.log("Recipe dietary restrictions is undefined");
    }

    // Set the href attribute for the edit button with the recipe ID
    $('.edit-recipe-link').attr('href', `edit-recipe.html?id=${recipeId}`);
  } else {
    $('.recipe-details').html('<p>Recipe not found.</p>');
  }

  // Handle delete button click
  $('.delete-button').on('click', function() {
    // Mostrar un cuadro de confirmación antes de eliminar
    const confirmation = confirm('Are you sure you want to delete this recipe?');

    if (confirmation) {
      // Eliminar la receta del localStorage
      const updatedRecipes = recipes.filter(r => r.id !== recipeId);
      localStorage.setItem('recipes', JSON.stringify(updatedRecipes));

      // Redirigir a la página principal de recetas
      window.location.href = 'index.html'; // O la URL que desees para la lista de recetas
    }
  });
});