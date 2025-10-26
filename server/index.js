const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

const app = express();
//const contentSecurityPolicy = require('helmet-csp');
app.use(cors());
const router = require('./routes');

app.use(express.static(path.join(__dirname, 'build')));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.use('/api', router);

app.use(helmet());

const port = 5000;

app.listen(port,()=>{
  console.log(`Server is listening on http://localhost:${port}`);
});