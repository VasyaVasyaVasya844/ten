import path from 'path';
import fs from 'fs';
import async from 'async';
import _ from 'lodash';

function getDirectorySize(dirPath, callback) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      callback(err);
      return;
    }

    const filePaths = files.map((file) => path.join(dirPath, file));

    async.map(filePaths, (filePath, cb) => {
      fs.stat(filePath, (statErr, stats) => {
        if (statErr) {
          cb(statErr);
          return;
        }
        if (stats.isFile()) {
          cb(null, stats.size);
        } else {
          cb(null, 0);
        }
      });
    }, (mapErr, results) => {
      if (mapErr) {
        callback(mapErr);
        return;
      }
      const totalSize = _.sum(results);
      callback(null, totalSize);
    });
  });
}

export { getDirectorySize };
