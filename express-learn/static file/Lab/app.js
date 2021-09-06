const express = require('express');
const app = express();
const path = require('path');

// Lab4.1
// app.use(express.static(__dirname, './public'));
app.use('/static', express.static(path.join(__dirname, './public')));

app.listen(9500, () => {
  console.log('listening on port 9500');
});
