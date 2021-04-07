
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
            alert("Logged in");
            document.location.replace('/Dashboard');
          } else {
            alert('Failed to log in. ' + response.statusText);
          }
    }
};
document.querySelector('.form-login').addEventListener('submit', loginButtonClicked);

