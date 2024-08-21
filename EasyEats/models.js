class Ingredient {
  constructor(id, name, quantity, unit) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.unit = unit;
  }
}

class DietaryRestriction {
  constructor(id, description) {
    this.id = id;
    this.description = description;
  }
}

class Recipe {
  constructor(id, title, description, steps, difficulty, prepTime, ingredients, dietaryRestrictions, imageUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.steps = steps;
    this.difficulty = difficulty;
    this.prepTime = prepTime;
    this.ingredients = ingredients;
    this.dietaryRestrictions = dietaryRestrictions;
    this.imageUrl = imageUrl; // Nuevo campo para la URL de la imagen
  }
}

export { Ingredient, DietaryRestriction, Recipe };