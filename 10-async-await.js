import fsp from 'fs/promises';

// BEGIN
async function exchange(file1, file2) {
  try {
    const content1 = await fsp.readFile(file1, 'utf-8');
    const content2 = await fsp.readFile(file2, 'utf-8');

    await fsp.writeFile(file1, content2);
    await fsp.writeFile(file2, content1);
  } catch (err) {
    console.error('Error exchanging file contents:', err);
    throw err;
  }
}

export { exchange };
// END