const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json([
    { name: 'ej', age: 26 },
    { name: 'jh', age: 28 },
  ]);
});

module.exports = router;
