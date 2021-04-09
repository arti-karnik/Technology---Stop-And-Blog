const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
        alert("You're Logout!!");
        document.location.replace('/');
    } else {
      alert("Something wrong happened, please try again!!");
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
  