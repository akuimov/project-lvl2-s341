import fs from 'fs';
import path from 'path';
import parsers from './parsers';
import getAST from './ast';
import render from './renders';

const genDiff = (pathFile1, pathFile2, format) => {
  const obj1 = fs.readFileSync(pathFile1, 'utf8');
  const obj2 = fs.readFileSync(pathFile2, 'utf8');

  const extension1 = path.extname(pathFile1);
  const extension2 = path.extname(pathFile2);

  const parseObj1 = parsers(obj1, extension1);
  const parseObj2 = parsers(obj2, extension2);

  return render(getAST(parseObj1, parseObj2), format);
};

export default genDiff;
