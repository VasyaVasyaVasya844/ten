import fs from 'fs';

function move(sourcePath, destPath, callback) {
  fs.readFile(sourcePath, (readError, data) => {
    if (readError) {
      callback(readError);
      return;
    }

    fs.writeFile(destPath, data, (writeError) => {
      if (writeError) {
        callback(writeError);
        return;
      }

      fs.unlink(sourcePath, (unlinkError) => {
        if (unlinkError) {
          callback(unlinkError);
          return;
        }

        callback(null);
      });
    });
  });
}

export { move };
