module.exports = {
  meta: {
    docs: {
      url:
        'https://github.com/LodoSoftware/web/wiki/Styleguide#usedispatchaction-instead-of-usedispatch'
    }
  },
  create(context) {
    return {
      "CallExpression[callee.name='useDispatch']": node => {
        context.report({
          node,
          message: 'Use useDispatchAction instead of useDispatch.'
        });
      }
    };
  }
};
