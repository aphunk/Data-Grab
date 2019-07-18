let axios = require('axios')
let cheerio = require('cheerio')
let fs = require('fs')


// const BASE_URL = 'http://www.thecuriousdreamer.com/dreamdictionary/symbol/'

// const url = 'http://www.thecuriousdreamer.com/dreamdictionary/symbol/2390'


// const firstLiMeanings = [];
// const pMeanings = [];
// const test = [];

// let i = 0;
// while (i < 25) {
//   let url = BASE_URL + i;

axios.get('http://www.thecuriousdreamer.com/dreamdictionary/symbol/2390')
  .then((response) => {
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html, {
        xml: {
          normalizeWhitespace: true,
        }
      });
      let words = [];
      $('.span7').each(function (i, e) {
        if ($(this).find('.term, .row').text().trim() != "") {
          words[i] = {
            "word": $(this).find('.term, .row').text().trim(),
            "meaning": $(this).find($($('li'))).first().text().trim() + " " + $(this).find('p').text().replace(':', ' ')
          }
        }
      });
      const wordsTrimmed = words.filter(n => n != undefined)
      fs.writeFile('words.json',
        JSON.stringify(wordsTrimmed, null, 4),
        (err) => console.log('Successfully written!'))
    }
  }, (error) => console.log(err));







// axios.get('https://dev.to/aurelkurtula')
//   .then((response) => {
//     if (response.status === 200) {
//       const html = response.data;
//       const $ = cheerio.load(html);
//       let devtoList = [];
//       $('.single-article').each(function (i, elem) {
//         devtoList[i] = {
//           title: $(this).find('h3').text().trim(),
//           url: $(this).children('.index-article-link').attr('href'),
//           tags: $(this).find('.tags').text().split('#')
//             .map(tag => tag.trim())
//             .filter(function (n) { return n != "" })
//         }
//       });
//       const devtoListTrimmed = devtoList.filter(n => n != undefined)
//       fs.writeFile('devtoList.json',
//         JSON.stringify(devtoListTrimmed, null, 4),
//         (err) => console.log('File successfully written!'))
//     }
//   }, (error) => console.log(err));










  // }
  //   console.log(words)
  //     // words.each(function (obj) {
  //     //   console.log(obj.meaning)
  //     // })
  //   })

  // });

// i++;

// }
        // words.push({
        //   "word": $(this).find('.term, .row').text().trim(),
        //   "meaning": $(this).find('p').text().replace(':', ' '),
        // })

        // firstLiMeanings.push({
        //   "word": $(this).find('.term, .row').text().trim(),
        //   "additional": $(this).find($($('li'))).first().text()
        // })

        // pMeanings.push({
        //   "word": $(this).find('.term, .row').text().trim(),
        //   "meaning": $(this).find('.definition').text().replace(':', ' '),
        // })

        // console.log(pMeanings)
        // console.log(firstLiMeanings)
        // console.log(test)



