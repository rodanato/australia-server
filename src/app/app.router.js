const express = require('express');
const router  = express.Router();

router.use((req, res, next) => {
  console.log('Something is happening.');
  next();
});

router.get('/', (req, res) => {
  res.json({ message: 'Social music API' });
});

module.exports = {
  router
};
