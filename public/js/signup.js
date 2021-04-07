const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('.input-username-signup').value.trim();
    const password = document.querySelector('.input-password-signup').value.trim();
    const confirmPassword = document.querySelector('.input-confirm-password-signup').value.trim();

    if (username && password && confirmPassword) {
        /*if (password != confirmPassword){
            alert("Password and Confirm password doesnot match!");
        } else {*/
            console.log(JSON.stringify({ username, password }));

            console.log("inn");
            const response = await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
              });
          
              
              if (response.ok) {
                alert('OK');
                document.location.replace('/');
              } else {
                alert('Failed to log in.');
              }
        //}
    } else if (username == "" || username == null) {
        alert("Please Enter Username");
    } else if (password == "" || password == null) {
        alert("Please Enter Password");
    } else if (confirmPassword == "" || confirmPassword == null) {
        alert("Please Enter Confirm Password");
    }
};

document.querySelector('.form-signup').addEventListener('submit', signupFormHandler);
