const route = {
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: './public',
    },
  },
};

module.exports = route;
