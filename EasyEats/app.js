import { Ingredient, DietaryRestriction, Recipe } from './models.js';

function generateUniqueId() {
  return 'id-' + new Date().getTime();
}

const initialRecipes = [
  new Recipe(
    generateUniqueId(),
    'Spaghetti Bolognese',
    'A classic Italian pasta dish.',
    ['Boil pasta', 'Cook meat', 'Mix sauce with meat', 'Combine pasta and sauce'],
    'Easy',
    30,
    [
      new Ingredient(1, 'Spaghetti', '200', 'g'),
      new Ingredient(2, 'Ground Beef', '100', 'g'),
      new Ingredient(3, 'Tomato Sauce', '200', 'ml'),
    ],
    [new DietaryRestriction(1, 'Gluten')],
    'img/spagetti.jpeg'
  ),
  new Recipe(
    generateUniqueId(),
    'Chicken Salad',
    'A healthy and refreshing salad.',
    ['Chop vegetables', 'Grill chicken', 'Mix all ingredients'],
    'Easy',
    20,
    [
      new Ingredient(1, 'Chicken Breast', '150', 'g'),
      new Ingredient(2, 'Lettuce', '100', 'g'),
      new Ingredient(3, 'Tomatoes', '50', 'g'),
    ],
    [new DietaryRestriction(1, 'None')],
    'img/Greek-chicken-salad-recipe-6.jpg'
  ),
];

const recipes = JSON.parse(localStorage.getItem('recipes')) || initialRecipes;

if (!localStorage.getItem('recipes')) {
  localStorage.setItem('recipes', JSON.stringify(recipes));
}

$(document).ready(function() {
  // Handle form submission for creating a new recipe
  $('#create-recipe-form').on('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted'); // Debugging line

    const id = generateUniqueId();
    const title = $('#recipe-name').val();
    const description = $('#recipe-description').val();
    const steps = $('#recipe-steps').val().split('\n');
    const difficulty = $('#cooking-skill').val();
    const prepTime = $('#prep-time').val();
    const imageUrl = $('#recipe-image-url').val();
    const ingredients = $('#recipe-ingredients').val().split('\n').map((ingredient, index) => {
      const parts = ingredient.split(',');
      if (parts.length === 3) {
        const [name, quantity, unit] = parts;
        return new Ingredient(index + 1, name.trim(), quantity.trim(), unit.trim());
      } else {
        console.error(`Invalid ingredient format: ${ingredient}`);
        return null;
      }
    }).filter(ingredient => ingredient !== null);
    const dietaryRestrictions = $('#dietary-preferences').val().split(',').map((restriction, index) => {
      return new DietaryRestriction(index + 1, restriction.trim());
    });

    const newRecipe = new Recipe(id, title, description, steps, difficulty, prepTime, ingredients, dietaryRestrictions, imageUrl);
    recipes.push(newRecipe);

    // Store recipes in localStorage
    localStorage.setItem('recipes', JSON.stringify(recipes));
    console.log('Recipes stored in localStorage:', JSON.parse(localStorage.getItem('recipes'))); // Debugging line

    // Redirect to recipe.html with the ID of the new recipe
    const recipeId = newRecipe.id;
    window.location.href = `recipe.html?id=${recipeId}`;
  });

  // Function to display recipes
  function displayRecipes(recipesToDisplay) {
    const $recipesContainer = $('#recipes-container');
    $recipesContainer.empty();

    recipesToDisplay.forEach(recipe => {
      // Crear el enlace que apunta a la página de detalles de la receta
      const $recipeLink = $('<a>').attr('href', `recipe.html?id=${recipe.id}`).addClass('recipe-link');

      // Crear el contenedor de la receta
      const $recipeDiv = $('<div>').addClass('recipe-item');

      // Crear el contenido de la receta
      const $recipeImg = $('<img>').attr('src', recipe.imageUrl).attr('alt', recipe.title);
      const $recipeName = $('<h3>').addClass('recipe-name').text(recipe.title);

      // Añadir el contenido al contenedor de la receta
      $recipeDiv.append($recipeImg);
      $recipeDiv.append($recipeName);

      // Añadir el contenedor al enlace
      $recipeLink.append($recipeDiv);

      // Añadir el enlace al contenedor de recetas
      $recipesContainer.append($recipeLink);
    });
  }


 // Function to search recipes
 function searchRecipes(query) {
  const allRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
  const filteredRecipes = allRecipes.filter(recipe =>
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );
  displayRecipes(filteredRecipes);
}

// Event handler for the search input
$('.search-bar input[type="search"]').on('input', function() {
  const query = $(this).val();
  searchRecipes(query);
});

  // Initial display of recipes
  displayRecipes(recipes);
});
