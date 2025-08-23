const express = require('express');
const app = express();

const router  = express.Router();

router.get('/test', (req, res) => {
  res.status(200).json({mssg: 'Get request to /api/test'});
});

module.exports = router;