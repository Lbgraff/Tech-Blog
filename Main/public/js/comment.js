const newFormHandler = async (event) => {
    event.preventDefault();
  
    const commentText = document.querySelector('#comment-name').value.trim();
  
    if (commentText) {
      const response = await fetch(`/api/blogpost/comment`, {
        method: 'POST',
        body: JSON.stringify({ commentText }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.comment-list')
    .addEventListener('click', delButtonHandler);
  