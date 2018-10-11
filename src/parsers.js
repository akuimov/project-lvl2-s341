import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default (pathFile) => {
  const parser = {
    '.json': JSON.parse,
    '.yml': yaml.safeLoad,
  };

  const extension = path.extname(pathFile);
  return parser[extension](fs.readFileSync(pathFile, 'utf8'));
};
