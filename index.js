const fs = require('fs');
const superagent = require('superagent');
fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((error, response) => {
      if (error) {
        console.log(error.message);
      }
      console.log(response.body.message);
      fs.writeFile('dog-img.txt', response.body.message, (error) => {
        if (error) {
          console.log(error.message);
        }
        console.log('Random dog image saved to file!');
      });
    });
});
