request('https://swapi.dev/api/people/1/', (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const data = JSON.parse(body);
    console.log(data);
    // update the data displayed in your app using setState or other methods
  }
});