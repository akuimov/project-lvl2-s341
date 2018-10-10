
import genDiff from '../src/bin/gendiff';
import result from './__fixtures__/result';

it('works with `import`', () => {
  const res = result();
  const obj1 = './__fixtures__/before.json';
  const obj2 = './__fixtures__/after.json';
  expect(genDiff(obj1, obj2)).toBe(res);
});
