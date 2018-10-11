import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';

export default (pathFile) => {
  const parser = {
    '.json': JSON.parse,
    '.yml': yaml.safeLoad,
    '.ini': ini.parse,
  };

  const extension = path.extname(pathFile);
  return parser[extension](fs.readFileSync(pathFile, 'utf8'));
};
