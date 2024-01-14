const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Run On LocalHost');
});

app.listen(port, () => {
  console.log(`***Connection*** ==> http://localhost:${port}`);
});