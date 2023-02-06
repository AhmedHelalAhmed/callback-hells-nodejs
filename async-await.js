const superagent = require('superagent');
const { writeFilePro, readFilePro } = require('./files-base-on-promises');
const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);
    const response = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(response.body.message);
    await writeFilePro('dog-img.txt', response.body.message);
    console.log('Random dog image saved to file!');
  } catch (error) {
    console.log(error);

    throw error;
  }
  return '2: READY $$';
};

(async () => {
  try {
    console.log('1: Will get dog pics!');
    const getDogPicResult = await getDogPic();
    console.log(getDogPicResult);
    console.log('3: Done getting dog pics!');
  } catch (err) {
    console.log('ERROR @@');
  }
})();
