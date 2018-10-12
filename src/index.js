import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import parsers from './parsers';

const genDiff = (pathFile1, pathFile2) => {
  const obj1 = fs.readFileSync(pathFile1, 'utf8');
  const obj2 = fs.readFileSync(pathFile2, 'utf8');

  const extension1 = path.extname(pathFile1);
  const extension2 = path.extname(pathFile2);

  const file1 = parsers(obj1, extension1);
  const file2 = parsers(obj2, extension2);

  const unionObj = _.union(Object.keys(file1), Object.keys(file2));

  const result = unionObj.map((value) => {
    if (_.has(file1, value)) {
      if (_.has(file2, value)) {
        if (file1[value] === file2[value]) {
          return `${value}: ${file1[value]}`;
        }

        return `+ ${value}: ${file1[value]}\n- ${value}: ${file2[value]}`;
      }

      return `- ${value}: ${file1[value]}`;
    }

    return `+ ${value}: ${file2[value]}`;
  });

  return result.join('\n');
};

export default genDiff;
