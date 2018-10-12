import fs from 'fs';
import path from 'path';
import genDiff from '../src';

const fixtures = __dirname;
const result = fs.readFileSync(`${fixtures}/__fixtures__/result.txt`, 'utf8');
const beforeJson = `${fixtures}/__fixtures__/before.json`;
const afterJson = `${fixtures}/__fixtures__/after.json`;
const beforeYml = `${fixtures}/__fixtures__/before.yml`;
const afterYml = `${fixtures}/__fixtures__/after.yml`;
const beforeIni = `${fixtures}/__fixtures__/before.ini`;
const afterIni = `${fixtures}/__fixtures__/after.ini`;

it('Сomparison json files', () => {
  expect(genDiff(beforeJson, afterJson)).toBe(result);
});

it('Сomparison yml files', () => {
  expect(genDiff(beforeYml, afterYml)).toBe(result);
});

it('Сomparison ini files', () => {
  expect(genDiff(beforeIni, afterIni)).toBe(result);
});
