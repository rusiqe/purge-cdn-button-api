const button = document.getElementById('post-btn');

button.addEventListener('click', async _ => {
  try {     
    const response = await fetch('https://api.cdn77.com/v3/cdn/1215031777/job/purge-all', {
      method: 'post',
      body: {
        //no body needed for purge-all job type
      }
    });
    console.log('Completed!', response);
  } catch(err) {
    console.error(`Error: ${err}`);
  }
});