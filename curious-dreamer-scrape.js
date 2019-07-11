const axios = require('axios')
const cheerio = require('cheerio')

const BASE_URL = 'http://www.thecuriousdreamer.com/dreamdictionary/symbol/'

// const url = 'http://www.thecuriousdreamer.com/dreamdictionary/symbol/2390'

let i = 0;
while (i < 10) {
  let url = BASE_URL + i;

  axios.get(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);

      let words = [];

      $('.span7').each(function (i, e) {
        words[i] = {
          "word": $(this).find('.term, .row').text().trim(),
          "meaning": $(this).find('.definition').text().replace(':', ': '),
          "additional_meanings": $(this).find('ul').text()
        }
      })
      console.log(words)
    })
  i++;
}

// const isLi = (element) => {
//   return element.is('li')
// }
