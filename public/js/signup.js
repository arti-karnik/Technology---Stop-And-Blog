const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('.input-username-signup').value.trim();
    const password = document.querySelector('.input-password-signup').value.trim();
    const confirmPassword = document.querySelector('.input-confirm-password-signup').value.trim();

    if (password != confirmPassword){
        alert("Password and Confirm password doesnot match!");
        return;
    } 
    if (username && password && confirmPassword) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
          });
          
          if (response.ok) {
            alert("You're able to successfully create an account");
            document.location.replace('/Dashboard');
          } else {
            alert("Something wrong happened, please try again!!");
          }
    }
};

document.querySelector('.form-signup').addEventListener('submit', signupFormHandler);
