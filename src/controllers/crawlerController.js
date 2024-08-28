// src/controllers/crawlerController.js
const axios = require('axios');
const cheerio = require('cheerio');
const logger = require('../utils/logger');

exports.crawl = async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) {
      logger.error('URL is missing');
      return res.status(400).json({ error: 'URL is required' });
    }

    // Fazendo requisição HTTP
    const response = await axios.get(url);
    const { status, data } = response;

    if (status !== 200) {
      logger.error(`Failed to fetch the URL. Status code: ${status}`);
      return res.status(status).json({ error: `Failed to fetch the URL. Status code: ${status}` });
    }

    // Usando cheerio para carregar HTML
    const $ = cheerio.load(data);
    const title = $('title').text() || 'No title found';

    logger.info(`Crawled URL: ${url}, Title: ${title}`);

    res.json({ title });
  } catch (error) {
    console.log(error);
    logger.error('Error during crawling:', error.message);

    // Verifica se o erro é relacionado ao axios
    if (error.response) {
      // O servidor respondeu com um status fora da faixa 2xx
      logger.error(`Axios error: ${error.response.status} - ${error.response.statusText}`);
      res.status(error.response.status).json({ error: error.response.statusText });
    } else if (error.request) {
      // A requisição foi feita, mas não houve resposta
      logger.error('No response received from the server.');
      res.status(500).json({ error: 'No response received from the server.' });
    } else {
      // Algo deu errado ao configurar a requisição
      logger.error(`Request error: ${error.message}`);
      res.status(500).json({ error: 'An error occurred during crawling' });
    }
  }
};
