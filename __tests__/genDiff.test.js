
import genDiff from '../src';

const fixtures = __dirname;
const result = 'host: hexlet.io\n+ timeout: 50\n- timeout: 20\n- proxy: 123.234.53.22\n- follow: false\n+ verbose: true';
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
