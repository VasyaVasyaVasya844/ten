import fs from 'fs';

function watch(filepath, interval, callback) {
  let lastModifiedTime = null;

  const timerId = setInterval(() => {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        clearInterval(timerId);
        callback(err);
        return;
      }

      if (lastModifiedTime && stats.mtimeMs !== lastModifiedTime) {
        callback(null);
      }

      lastModifiedTime = stats.mtimeMs;
    });
  }, interval);

  return timerId;
}

export default watch;
