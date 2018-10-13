import fs from 'fs';
import genDiff from '../src';

const fixtures = __dirname;

it('Сomparison json files', () => {
  const beforeJson = `${fixtures}/__fixtures__/before.json`;
  const afterJson = `${fixtures}/__fixtures__/after.json`;
  const result = fs.readFileSync(`${fixtures}/__fixtures__/result.txt`, 'utf8');

  expect(genDiff(beforeJson, afterJson)).toBe(result);
});

it('Сomparison yml files', () => {
  const beforeYml = `${fixtures}/__fixtures__/before.yml`;
  const afterYml = `${fixtures}/__fixtures__/after.yml`;
  const result = fs.readFileSync(`${fixtures}/__fixtures__/result.txt`, 'utf8');

  expect(genDiff(beforeYml, afterYml)).toBe(result);
});

it('Сomparison ini files', () => {
  const beforeIni = `${fixtures}/__fixtures__/before.ini`;
  const afterIni = `${fixtures}/__fixtures__/after.ini`;
  const result = fs.readFileSync(`${fixtures}/__fixtures__/result.txt`, 'utf8');

  expect(genDiff(beforeIni, afterIni)).toBe(result);
});

it('JSON serialise', () => {
  const beforeIni = `${fixtures}/__fixtures__/before.ini`;
  const afterIni = `${fixtures}/__fixtures__/after.ini`;
  const result = fs.readFileSync(`${fixtures}/__fixtures__/parseJSON.json`, 'utf8');

  expect(genDiff(beforeIni, afterIni, 'json')).toBe(result);
});


it('Formats', () => {
  const beforeJson = `${fixtures}/__fixtures__/before.json`;
  const afterJson = `${fixtures}/__fixtures__/after.json`;
  const result = fs.readFileSync(`${fixtures}/__fixtures__/formatresult.txt`, 'utf8');

  expect(genDiff(beforeJson, afterJson, 'format')).toBe(result);
});
