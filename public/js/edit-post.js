async function editPost(event) {
    event.preventDefault();

    const title = document.querySelector('.blog-title').value;
    const content = document.querySelector('.blog-content').value;
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
      
      const response = await fetch(`/api/blog/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          blog_id: id,
          title,
          content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        alert("Blog Updated");
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }

}
async function deletePost(event) {
  event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
      
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          blog_id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        alert("Blog deleted..");
        document.location.replace('/Dashboard/');
      } else {
        alert(response.statusText);
      }
    
}

//delete-post
document.querySelector('.edit-post').addEventListener('click', editPost);