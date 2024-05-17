import fsp from 'fs/promises';

const reverse = async (filePath) => {
  try {
    const fileContent = await fsp.readFile(filePath, 'utf-8');
    const reversedContent = fileContent.split('\n').reverse().join('\n');
    await fsp.writeFile(filePath, reversedContent);
  } catch (err) {
    return Promise.reject(err);
  }
};

export { reverse };
