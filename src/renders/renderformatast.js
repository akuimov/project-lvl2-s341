import _ from 'lodash';

const resultValue = (val) => {
  if (_.isObject(val)) {
    return '[complex value]';
  }
  return val;
};

const renderformat = (renderObj, parent = '') => {
  const renders = _.map(renderObj, (node) => {
    const value = resultValue(node.value);
    const value1 = resultValue(node.value1);
    const value2 = resultValue(node.value2);
    const newParent = `${parent}${node.key}.`;

    const typeManager = {
      parent: `Section '${parent}${node.key}'\n${renderformat(node.childrenObj, newParent)}`,
      changed: `Property '${parent}${node.key}' was updated. From ${value1} to ${value2}`,
      deleted: `Property '${parent}${node.key}' was removed`,
      added: `Property '${parent}${node.key}' was added with value: ${value}`,
      equal: `Property '${parent}${node.key}' wasn't changed`,
    };

    return typeManager[node.type];
  });

  return `${renders.join('\n')}`;
};

export default renderformat;
