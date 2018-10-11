import commander from 'commander';
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

commander
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.1')
  .option('-f, --format [type]', 'Output format');
commander.parse(process.argv);

export const parsers = (pathFile) => {
  const parser = {
    '.json': JSON.parse,
    '.yml': yaml.safeLoad,
  };

  const extension = path.extname(pathFile);
  return parser[extension](fs.readFileSync(pathFile, 'utf8'));
};

const genDiff = (pathFile1, pathFile2) => {
  const file1 = parsers(pathFile1);
  const file2 = parsers(pathFile2);

  const str1 = _.reduce(file1, (acc, value, key) => {
    if (_.has(file2, key)) {
      if (file1[key] === file2[key]) {
        return [...acc, `${key}: ${value}`];
      }

      return [...acc, `+ ${key}: ${value}`, `- ${key}: ${file2[key]}`];
    }

    return [...acc, `- ${key}: ${value}`];
  }, []);

  const str2 = _.reduce(file2, (acc, value, key) => (_.has(file1, key)
    ? acc
    : [...acc, `+ ${key}: ${file2[key]}`]), []);

  return _.concat(str1, str2).join('\n');
};

export default genDiff;
