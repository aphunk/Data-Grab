const axios = require('axios')
const cheerio = require('cheerio')

const BASE_URL = 'http://www.thecuriousdreamer.com/dreamdictionary/symbol/'

const url = 'http://www.thecuriousdreamer.com/dreamdictionary/symbol/667'

axios.get(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);

    let words = [];

    $('.span7').each(function (i, e) {
      words[i] = {
        "word": $(this).find('.term').text().trim(),
        "meaning": $(this).find('.span4').text().trim(),
      }
      console.log(words)
    })
  })