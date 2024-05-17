import fsp from 'fs/promises';

// BEGIN
async function getTypes(paths) {
  const results = await Promise.all(
    paths.map(async (path) => {
      try {
        const stats = await fsp.stat(path);
        return stats.isDirectory() ? 'directory' : 'file';
      } catch {
        return null;
      }
    })
  );
  return results;
}

export { getTypes };

// END