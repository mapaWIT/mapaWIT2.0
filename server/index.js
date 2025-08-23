const express = require('express');
const helmet = require('helmet');
const contentSecurityPolicy = require('helmet-csp');

const app = express();
app.use(helmet());

app.get('/hello', (req, res) => {
  res.status(200).json({mssg: 'hello'});
});

const port = 5000;

app.listen(port,()=>{
  console.log(`Server is listening on http://localhost:${port}`);
});