const blogClicked = async (event) => {  
  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert("Logged in");
    document.location.replace('/Dashboard');
  } else {
    alert(response.statusText);
  }
};
document.querySelector(".blog-card").addEventListener("click", blogClicked);
