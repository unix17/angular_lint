module.exports = {
  'src/**/*.ts': (files) =>
    {
      return `ng lint ${files.map((file) => `--lint-file-patterns ${file}`).join(' ')}`;
    }
  };
