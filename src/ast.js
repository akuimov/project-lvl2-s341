import _ from 'lodash';

const getAST = (object1, object2) => {
  const unionObj = _.union(Object.keys(object1), Object.keys(object2));

  return unionObj.map((key) => {
    const value1 = object1[key];
    const value2 = object2[key];

    if (_.isObject(value1) && _.isObject(value2)) {
      return {
        key, type: 'parent', childrenObj: getAST(value1, value2),
      };
    }

    if (_.has(object1, key)) {
      if (_.has(object2, key)) {
        if (value1 === value2) {
          return {
            key, type: 'equal', value: value1,
          };
        }

        return {
          key, type: 'changed', value1, value2,
        };
      }

      return {
        key, type: 'deleted', value: value1,
      };
    }

    return {
      key, type: 'added', value: value2,
    };
  });
};

export default getAST;
