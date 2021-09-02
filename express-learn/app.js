const express = require('express');

const app = express();

app.use((request, response) => {
  response.send('<h1>Welcome to my First Express Web App</h1>');
});

app.listen(8888, () => {
  console.log('Server running on port 8888');
});
