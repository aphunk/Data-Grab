const axios = require('axios')
const cheerio = require('cheerio')
const jsonframe = require('jsonframe-cheerio');

const BASE_URL = 'http://www.dreambible.com/dreamdictionary/';

const getData = () => {
  let listOfTerms = [];
  const alphabet = [
    "a",
    "a2",
    "a3",
    "a4",
    "b",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "c",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "d",
    "d2",
    "d3",
    "e",
    "e2",
    "f",
    "f2",
    "f3",
    "g",
    "g2",
    "g3",
    "h",
    "h2",
    "h3",
    "i",
    "i2",
    "j",
    "k",
    "l",
    "l2",
    "l3",
    "m",
    "m2",
    "m3",
    "m4",
    "n",
    "n2",
    "o",
    "o2",
    "p",
    "p2",
    "p3",
    "p4",
    "p5",
    "q",
    "r",
    "r2",
    "r3",
    "s",
    "s2",
    "s3",
    "s4",
    "s5",
    "s6",
    "s7",
    "s8",
    "t",
    "t2",
    "t3",
    "t4",
    "u",
    "v",
    "w",
    "w2",
    "x",
    "y",
    "z"
  ];

  alphabet.forEach(function (page) {
    let url = BASE_URL + page + ".html";

    axios.get(url)
      .then((response) => {
        // console.log(response.data)
        let $ = cheerio.load(response.data);
        jsonframe($);

        $('p').each(function (i, e) {
          if (i % 2 == 0) {
            listOfTerms[i] = [$(this).text()];
          } else {
            listOfTerms[i - 1].push($(this).text());
          }
        })
        listOfTerms.join('+')
        console.log(listOfTerms);
      });
  })
}

getData();
