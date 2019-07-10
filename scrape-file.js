const cheerio = require('cheerio');
const jsonframe = require('jsonframe-cheerio');

const $ = cheerio.load('http://www.dreammean.com/a/aardvark');
jsonframe($); // initializes the plugin


/// Structure ////

//    word : ul.crumbs>li:last-of-type
//    |_ interpretation .text>p


const frame = {
  "interpretations": {
    "selector": "div.text", //element to search in
    "data": [{
      "term": "b",
      "meaning": "p"
    }]
  }
};

// console.log(cheerio.text($(".main_content")))
let listOfTerms = $(".main_content").scrape(frame, { string: true });
console.log(listOfTerms);