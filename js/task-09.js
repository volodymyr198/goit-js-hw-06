function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnChange = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

const onTargetBtnClick = event => {
    let color = getRandomHexColor();
    colorText.textContent = color;

    document.body.style.backgroundColor = color;
    console.log(color);
};

btnChange.addEventListener('click', onTargetBtnClick);
