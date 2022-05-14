const express = require('express');
const app = express();

// random number generator
app.get('/randomNum/:num', (req, res) => {
  res.send({
    data: Math.floor(Math.random() * req.params.num)
  })
})

app.listen(5000, () => {
  console.log('Listening on port 5000');
});