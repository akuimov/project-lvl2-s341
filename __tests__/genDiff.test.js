
import _ from 'lodash';
import genDiff, { parsers } from '../src';

const fixtures = __dirname;
const result = _.reduce(parsers(`${fixtures}/__fixtures__/result.json`), ((acc, value, index) => [...acc, `${index}: ${value}`]), []).join('\n');
const beforeJson = `${fixtures}/__fixtures__/before.json`;
const afterJson = `${fixtures}/__fixtures__/after.json`;
const beforeYml = `${fixtures}/__fixtures__/before.yml`;
const afterYml = `${fixtures}/__fixtures__/after.yml`;

it('Сomparison json files', () => {
  expect(genDiff(beforeJson, afterJson)).toBe(result);
});

it('Сomparison yml files', () => {
  expect(genDiff(beforeYml, afterYml)).toBe(result);
});
