const signInForm = document.querySelector(".form");

signInForm.addEventListener('submit', handleSubmit);

function handleSubmit (evt) {
    evt.preventDefault();

    const form = evt.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        return console.log('Please fill in all the fields!');
    };

    console.log(`Email: ${email}, Password: ${password}`);

    form.reset();
};