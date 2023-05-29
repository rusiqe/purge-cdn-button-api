const button = document.getElementById('post-btn');

button.addEventListener('click', async _ => {
  try {     
    const response = await fetch('https://api.cdn77.com/v3/cdn/1215031777/job/purge', {
      method: 'post',
      body: {
        "paths": [
          "/banners/"
          ]
      }
    });
    console.log('Completed!', response);
  } catch(err) {
    console.error(`Error: ${err}`);
  }
});