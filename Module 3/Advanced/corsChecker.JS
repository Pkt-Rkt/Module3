const url = 'https://github.com'; // Replace with the URL you want to check

// Using fetch
fetch(url)
  .then(response => {
    console.log('CORS is allowed'); // If CORS is allowed, you'll see this message
    // Handle the response here
  })
  .catch(error => {
    console.error('CORS is restricted'); // If CORS is restricted, you'll see this message
    // Handle the error here
  });