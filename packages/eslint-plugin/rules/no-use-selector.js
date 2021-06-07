module.exports = {
  meta: {
    docs: {
      url: 'https://github.com/LodoSoftware/web/wiki/Styleguide#typed-hooks'
    }
  },
  create(context) {
    return {
      "CallExpression[callee.name='useSelector']": node => {
        context.report({
          node,
          message:
            'Use the appropriate module-specific selector such as useAppSelector, useMMSelector, useAccountsSelector, or useZelleSelector for type-safety.'
        });
      }
    };
  }
};
