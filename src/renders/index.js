import renderast from './renderast';
import renderformat from './renderformatast';

const rendering = {
  start: renderast,
  format: renderformat,
};

export default (ast, option = 'start') => rendering[option](ast);
