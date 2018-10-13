import _ from 'lodash';

const space = num => (' '.repeat(num * 2));

const resultValue = (val, numSpase) => {
  if (_.isObject(val)) {
    const str = Object.entries(val).map(([key, value]) => `${space(numSpase + 1)}${key}: ${value}`).join('\n');
    return `{\n${str}\n${space(numSpase)}}`;
  }
  return val;
};

const render = (renderObj, numSpase = 1) => {
  const renders = _.map(renderObj, (node) => {
    const value = resultValue(node.value, numSpase + 1);
    const value1 = resultValue(node.value1, numSpase + 1);
    const value2 = resultValue(node.value2, numSpase + 1);

    const typeManager = {
      parent: `${space(numSpase)}  ${node.key}: ${render(node.childrenObj, (numSpase + 1))}`,
      changed: `${space(numSpase)}- ${node.key}: ${value1}\n${space(numSpase)}+ ${node.key}: ${value2}`,
      deleted: `${space(numSpase)}- ${node.key}: ${value}`,
      added: `${space(numSpase)}+ ${node.key}: ${value}`,
      equal: `${space(numSpase)}  ${node.key}: ${value}`,
    };

    return typeManager[node.type];
  });

  return `{\n${renders.join('\n')}\n${space(numSpase)}}`;
};

export default render;
