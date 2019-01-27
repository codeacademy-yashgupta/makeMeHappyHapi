const hapi = require('hapi');
// const inert = require('inert');
const route = require('./routes/4-directory.routes.js');

// console.log(route);
const server = new hapi.Server({
  port: 3000,
  host: 'localhost',
});

const start = async () => {
  // eslint-disable-next-line global-require
  await server.register(require('inert'));

  server.route(route);
  if (!module.parent) {
    await server.start();
  }
  console.log('Server running at:', server.info.uri);
};

start();
module.exports = server;
