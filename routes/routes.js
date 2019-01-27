const routes = {
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return `Hello hapi`;
  }
};

module.exports = routes;
