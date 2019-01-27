const hapi = require('hapi');

const server = hapi.server({
  host: 'localhost',
  port: 3000,
});

const start = async () => {
  // eslint-disable-next-line global-require
  await server.register(require('inert'));

  server.route({
    method: 'GET',
    path: '/',
    handler(request, h) {
      return h.file('/Users/Yash_Gupta/codeAcademyPersonal/makeMeHappyHapi/index.html');
    },
  });
  // if (!module.parent) {
  await server.start();
  // }

  console.log('Server running at:', server.info.uri);
};

start();

module.exports = server;
