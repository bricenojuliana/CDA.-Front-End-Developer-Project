# EasyEats

## Descripción General

EasyEats es una aplicación web que permite a los usuarios buscar, ver y agregar recetas de cocina. La aplicación almacena recetas en el almacenamiento local del navegador y proporciona una interfaz fácil de usar para gestionar recetas.

## Requisitos Funcionales

1. **Agregar Recetas:**
   - Los usuarios pueden agregar nuevas recetas proporcionando detalles como el nombre, descripción, pasos, dificultad, tiempo de preparación, ingredientes y restricciones dietéticas.

2. **Ver Recetas:**
   - Los usuarios pueden ver una lista de recetas disponibles y hacer clic en una receta para ver sus detalles completos.

3. **Buscar Recetas:**
   - Los usuarios pueden buscar recetas por nombre o ingredientes.

4. **Almacenamiento Local:**
   - Las recetas se almacenan en el almacenamiento local del navegador para persistencia de datos.

## Casos de Uso

1. **Agregar una Nueva Receta:**
   - **Actor:** Usuario
   - **Descripción:** El usuario llena un formulario con los detalles de la receta y la guarda.
   - **Precondición:** El formulario de creación de recetas está disponible.
   - **Postcondición:** La nueva receta se guarda en el almacenamiento local y se muestra en la lista de recetas.

2. **Ver Detalles de una Receta:**
   - **Actor:** Usuario
   - **Descripción:** El usuario selecciona una receta de la lista para ver sus detalles completos.
   - **Precondición:** La lista de recetas está disponible.
   - **Postcondición:** Se muestra la página de detalles de la receta seleccionada.

3. **Buscar Recetas:**
   - **Actor:** Usuario
   - **Descripción:** El usuario ingresa un término de búsqueda y la aplicación muestra las recetas que coinciden.
   - **Precondición:** La barra de búsqueda está disponible.
   - **Postcondición:** Se muestran las recetas que coinciden con el término de búsqueda.

## Entidades

1. **Recipe (Receta):**
   - **Atributos:**
     - `id`: Identificador único de la receta.
     - `title`: Título de la receta.
     - `description`: Descripción de la receta.
     - `steps`: Pasos para preparar la receta.
     - `difficulty`: Dificultad de la receta.
     - `prepTime`: Tiempo de preparación.
     - `ingredients`: Lista de ingredientes.
     - `dietaryRestrictions`: Restricciones dietéticas.
     - `imageUrl`: URL de la imagen de la receta.

2. **Ingredient (Ingrediente):**
   - **Atributos:**
     - `id`: Identificador único del ingrediente.
     - `name`: Nombre del ingrediente.
     - `quantity`: Cantidad del ingrediente.
     - `unit`: Unidad de medida del ingrediente.

3. **DietaryRestriction (Restricción Dietética):**
   - **Atributos:**
     - `id`: Identificador único de la restricción dietética.
     - `name`: Nombre de la restricción dietética.

## Retrospectiva

- **HTML**
  - **Ubicación:** `search.html`
  - **Descripción:** El archivo HTML define la estructura de la página de búsqueda de recetas, incluyendo el formulario de búsqueda y el contenedor para mostrar las recetas.

- **CSS**
  - **Ubicación:** `search.css`
  - **Descripción:** El archivo CSS define los estilos visuales de la aplicación, incluyendo la apariencia de los formularios, botones y la disposición de las recetas.

- **JavaScript**
  - **Ubicación:** `app.js`
  - **Descripción:** El archivo JavaScript maneja la lógica de la aplicación, incluyendo la gestión de eventos, la manipulación del DOM y la interacción con el almacenamiento local.

- **JavaScript Object**
  - **Ubicación:** `models.js`
  - **Descripción:** El archivo define las clases `Recipe`, `Ingredient` y `DietaryRestriction`, que representan las entidades de la aplicación.

- **JavaScript Patterns: MVC**
  - **Ubicación:** `app.js`
  - **Descripción:** El archivo sigue el patrón MVC:
    - **Modelo:** Las clases `Recipe`, `Ingredient` y `DietaryRestriction` en `models.js`.
    - **Vista:** Los archivos HTML y CSS.
    - **Controlador:** La lógica en `app.js` y otros archivos `.js` que manejan la interacción entre el modelo y la vista.
