const newPostButtonClicked = async (event) => {
    event.preventDefault();
    const title = document.getElementById('blog-title').value;
    const content = document.getElementById('blog-content').value;
    let create_date = new Date().toLocaleDateString();

    if (title && content ) {
        const response = await fetch('/api/blog', {
            method: 'POST',
            body: JSON.stringify({ title, content, create_date }),
            headers: { 'Content-Type': 'application/json' },
          });
       
          if (response.ok) {
            alert("Blog added");
            document.location.replace('/Dashboard');
          } else {
            alert("Something wrong happened, please try again!!");
          }
    }
};
document.querySelector('.form-new-blog').addEventListener('submit', newPostButtonClicked);

