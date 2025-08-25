const express = require('express');

const router  = express.Router();

router.get('/mapa', (req, res) => {
  res.json({message: "Get request to /api/mapa"});
});

router.post('/mapa', (req,res) => {
  res.json({message: "Post request to /api/mapa"})
});

module.exports = router;