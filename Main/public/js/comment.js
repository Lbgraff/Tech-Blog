const newFormHandler = async (event) => {
    event.preventDefault();
  
    const commentText = document.querySelector('#comment-name').value.trim();
    const blogpost_id = event.target.getAttribute("data-blogpost-id")
    console.log(blogpost_id,commentText)
    if (commentText) {
      const response = await fetch(`/api/blogpost/comment`, {
        method: 'POST',
        body: JSON.stringify({ comment_text:commentText,
          blogpost_id:blogpost_id
         }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.reload()
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);
  
  // document
  //   .querySelector('.comment-list')
  //   .addEventListener('click', delButtonHandler);
  