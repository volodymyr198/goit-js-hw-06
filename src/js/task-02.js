const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

const createElements = ingredients.map(element => {
    const item = document.createElement('li');
    item.textContent = `${element}`;
    item.classList.add('item');
    console.log(item);
    return item;
});
ingredientsEl.append(...createElements);
