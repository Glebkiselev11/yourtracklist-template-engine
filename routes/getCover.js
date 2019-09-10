const express = require('express');
const router = express.Router();

router.get('/', async (req,res) => {
  const file = 'result/cart.jpg';
  res.download(file); 
})

module.exports = router;