import fs from 'fs';

// BEGIN
function compareFileSizes(filepath1, filepath2, callback) {
  const getSize = (filepath) => {
    return new Promise((resolve, reject) => {
      fs.stat(filepath, (err, stats) => {
        if (err) {
          reject(err);
        } else {
          resolve(stats.size);
        }
      });
    });
  };

  Promise.all([getSize(filepath1), getSize(filepath2)])
    .then(([size1, size2]) => {
      const result = Math.sign(size1 - size2);
      callback(null, result);
    })
    .catch((err) => {
      callback(err);
    });
}

export { compareFileSizes };

// END