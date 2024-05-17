import fs from 'fs';

// BEGIN
function write(filepath, data, callback) {
  fs.writeFile(filepath, data, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
}

export default write;

// END