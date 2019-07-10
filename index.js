const axios = require('axios')
const cheerio = require('cheerio')
const jsonframe = require('jsonframe-cheerio');

const url = 'http://www.dreambible.com/dreamdictionary/a.html';

axios.get(url)
  .then((response) => {
    // console.log(response.data)
    let $ = cheerio.load(response.data);
    jsonframe($);

    let listOfTerms = [];

    $('p').each(function (i, e) {
      listOfTerms[i] = $(this).text();
    })
    listOfTerms.join('+')
    console.log(listOfTerms);
  });



// const frame = {
//   "interpretations": {
//     "selector": "div.text", //element to search in
//     "data": [{
//       "term": "b",
//       "meaning": "p"
//     }]
//   }
// };

// console.log(cheerio.text($(".main_content")))