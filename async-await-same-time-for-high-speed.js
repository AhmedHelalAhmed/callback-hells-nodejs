const superagent = require('superagent');
const { writeFilePro, readFilePro } = require('./files-base-on-promises');

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const response1Promise = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const response2Promise = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const response3Promise = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    // now let's run the three requests at the same time and wait unit they finished
    const allResponses = await Promise.all([
      response1Promise,
      response2Promise,
      response3Promise,
    ]);
    const images = allResponses.map((response) => response.body.message);
    console.log(images);

    await writeFilePro('dog-img.txt', images.join('\n'));
    console.log('Random dog image saved to file!');
  } catch (error) {
    console.log(error.message);

    throw error; // to throw exception in catch block in the main block
  }
  return '2: READY $$';
};

(async () => {
  try {
    // we need this lines run with order so let's put then inside async function to put a wait
    console.log('1: Will get dog pics!');
    const x = await getDogPic(); // this will return promise so let's wait for it
    console.log(x);
    console.log('3: Done getting dog pics!');
  } catch (error) {
    console.log('ERROR @@', error.message);
  }
})();
