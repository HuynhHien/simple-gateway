

const express = require('express');


const server = express();
const port = process.env.PORT || 3000;

server.get('/register', (req, res) => {
  console.log(`Requset: ${req.query.device}!`);  
  res.send("Thanks you !!!");
});

server.listen(port, () => console.log(`Example app listening on port ${port}!`))
