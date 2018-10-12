
import yaml from 'js-yaml';
import ini from 'ini';

export default (parseObj, extension) => {
  const parser = {
    '.json': JSON.parse,
    '.yml': yaml.safeLoad,
    '.ini': ini.parse,
  };

  return parser[extension](parseObj);
};
