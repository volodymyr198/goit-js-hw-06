// const itemEl = document.querySelectorAll('.item');
// console.log(`Number of categories: ${itemEl.length}`);

// const categoryAndElements = [...itemEl]
//     .map(
//         categorie => `Category: ${categorie.children[0].textContent}
// Elements: ${categorie.children[1].children.length}`
//     )
//     .join(' ');
// console.log(categoryAndElements);

const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);

const categoryAndElements = [...itemEl].forEach(
    categorie => (
        console.log(`Category: ${categorie.children[0].textContent}`),
        console.log(`Elements: ${categorie.children[1].children.length}`)
    )
);
