var loginForm = document.getElementById("form-login");
var signUpForm = document.getElementById("form-sign-up");

    const loginFormHandler = async (event) => {
        alert("login clicked");
        loginForm.style.visibility= "hidden";
        signupForm.style.visibility= "hidden";
    };
    const signupFormHandler = async (event) => {
        alert("sign up clicked");
        loginForm.style.visibility= "hidden";
        signupForm.style.visibility= "hidden";
    };

document.querySelector('.login-button').addEventListener('click', loginFormHandler);
document.querySelector('.signup-button').addEventListener('click', signupFormHandler);
document.querySelector('.already-have-account-button').addEventListener('click', showLoginForm);
document.querySelector('.create-account-button').addEventListener('click', showSignUpForm);
