#!/usr/bin/env node

import commander from 'commander';
import _ from 'lodash';
import fs from 'fs';

commander
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.1')
  .option('-f, --format [type]', 'Output format');
commander.parse(process.argv);

export const parseFile = (pathFile => JSON.parse(fs.readFileSync(pathFile, 'utf8')));

const genDiff = (pathFile1, pathFile2) => {
  const file1 = parseFile(pathFile1);
  const file2 = parseFile(pathFile2);

  const str1 = _.reduce(file1, (acc, value, key) => {
    if (file2[key] !== undefined) {
      if (file1[key] === file2[key]) {
        return [...acc, `${key}: ${value}`];
      }

      return [...acc, `+ ${key}: ${value}`, `- ${key}: ${file2[key]}`];
    }

    return [...acc, `- ${key}: ${value}`];
  }, []);

  const str2 = _.reduce(file2, (acc, value, key) => (file1[key] !== undefined
    ? acc
    : [...acc, `+ ${key}: ${file2[key]}`]), []);

  return console.log(_.concat(str1, str2).join('\n'));
};

genDiff(process.argv[2], process.argv[3]);

export default genDiff;
