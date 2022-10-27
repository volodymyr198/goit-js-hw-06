const formEl = document.querySelector('.login-form');

const onTreatmentForm = event => {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (email === '' || password === '') {
        return alert('Все поля должны быть заполнены!!!');
    }

    const dataForm = {
        email,
        password,
    };

    console.log(dataForm);
    formEl.reset();
};
formEl.addEventListener('submit', onTreatmentForm);
