const loginButtonClicked = async (event) => {
    event.preventDefault();
    const username = document.querySelector('.input-username-login').value;
    const password = document.querySelector('.input-password-login').value;

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
          });
                
          console.log(response);
          if  (response.ok) {
            document.location.replace('/Dashboard');
          } 
          else if (response.status == 400 || response.status == 500) {
            alert("Incorrect email or password. Please try again!");
          }
    }
};
document.querySelector('.form-login').addEventListener('submit', loginButtonClicked);

