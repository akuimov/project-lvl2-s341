
import _ from 'lodash';
import genDiff, { parseFile } from '../src';

const fixtures = __dirname;

it('works with `import`', () => {
  const result = _.reduce(parseFile(`${fixtures}/__fixtures__/result.json`), ((acc, value, index) => [...acc, `${index}: ${value}`]), []).join('\n');

  const before = `${fixtures}/__fixtures__/before.json`;
  const after = `${fixtures}/__fixtures__/after.json`;
  expect(genDiff(before, after)).toBe(result);
});
