
const loginButtonClicked = async (event) => {

    event.preventDefault();
    const userName = document.querySelector('.input-username-login').value.trim();
    const password = document.querySelector('.input-password-login').value.trim();
    alert("in login");
};
document.querySelector('.form-login').addEventListener('submit', loginButtonClicked);

