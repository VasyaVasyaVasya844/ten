import fsp from 'fs/promises';

// BEGIN
async function touch(filePath) {
  try {
    await fsp.access(filePath);
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fsp.writeFile(filePath, '');
    } else {
      throw error;
    }
  }
}

export { touch };

// END