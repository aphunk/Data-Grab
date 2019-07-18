const axios = require('axios')
const cheerio = require('cheerio')
const request = require('request')

function getData(id) {
  const BASE_URL = 'http://www.thecuriousdreamer.com/dreamdictionary/symbol/'

  // let i = 0;
  // while (i < 25) {
  //   let url = BASE_URL + i;

  let url = BASE_URL + 28;

  request(url,
    (error, response, data) => {
      const $ = cheerio.load(data);
      let terms = [];
      let i = 0;
      while (i < 25) {
        try {
          terms.push({
            word: $("div.term").text().trim()
          });
          i++;
          console.log(terms)
        } catch (e) {
          i++;
        }
      }

      // callback(null, { terms });
    });

}

const data = getData();
console.log(data);