import { promises as fsPromises } from 'fs';

// BEGIN
async function printFileContent(filePath) {
  try {
    const fileData = await fsPromises.readFile(filePath, 'utf-8');
    console.log(fileData);
  } catch (err) {
    console.error('', err);
  }
}

export default printFileContent;
// END
