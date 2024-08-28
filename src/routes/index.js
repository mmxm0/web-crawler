const express = require('express');
const router = express.Router();
const crawlerController = require('../controllers/crawlerController');

router.get('/crawl', crawlerController.crawl);

module.exports = router;