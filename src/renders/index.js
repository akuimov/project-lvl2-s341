import renderast from './renderast';
import renderformat from './renderformatast';

const rendering = {
  start: renderast,
  format: renderformat,
  json: JSON.stringify,
};

export default (ast, option = 'start') => rendering[option](ast);
