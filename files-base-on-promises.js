const fs = require('fs');

const readFilePro = (file) => {
  // manual make promise
  return new Promise((resolve, reject) => {
    fs.readFile(file, (error, data) => {
      if (error) {
        reject('I could not find that file !! ' + error.message);
      }
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  // manual make promise
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (error) => {
      if (error) {
        reject('Could not write file !! ' + error.message);
      }
      resolve('success');
    });
  });
};

exports.readFilePro = readFilePro;
exports.writeFilePro = writeFilePro;
