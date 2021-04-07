
const loginButtonClicked = async (event) => {
    event.preventDefault();
    const userName = document.querySelector('.input-username-login').value.trim();
    const password = document.querySelector('.input-password-login').value.trim();
    if (userName && password) {
        alert("login" + userName + password);
    } else if (userName == "" || userName == null) {
        alert("Please Enter Username");
    } else if (password == "" || password == null) {
        alert("Please Enter Password");
    }
};
document.querySelector('.form-login').addEventListener('submit', loginButtonClicked);
