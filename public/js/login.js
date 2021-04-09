
const loginButtonClicked = async (event) => {
    event.preventDefault();
    const username = document.querySelector('.input-username-login').value.trim();
    const password = document.querySelector('.input-password-login').value.trim();
    
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
          });
       
          if (response.ok) {
            document.location.replace('/Dashboard');
          } else {
            alert("Incorrect email or password. Please try again!");
          }
    }
};
document.querySelector('.form-login').addEventListener('submit', loginButtonClicked);

