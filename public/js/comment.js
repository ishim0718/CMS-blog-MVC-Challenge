const newFormHandler = async (event) => {
    event.preventDefault();
  
    const blogpost = event.target.getAttribute('blogpost-id'); 

    const comment = document.querySelector('#comment').value.trim();
  
    if (comment) {
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ blogpost, comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/dashboard`);
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);
  