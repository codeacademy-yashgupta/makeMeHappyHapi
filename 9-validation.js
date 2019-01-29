const hapi = require('hapi');
const Joi = require('joi');

const server = hapi.server({
  host: 'localhost',
  port: Number(8080),
});

const start = async () => {
  // eslint-disable-next-line global-require
  await server.register(require('inert'));
  const routeConfig = {
    path: '/chicken/{breed?}',
    method: 'GET',
    handler: (request, h) => 'hi',
    config: {
      validate: {
        params: {
          breed: Joi.string().required(),
        },
      },
    },
  };
  server.route(routeConfig);
  if (!module.parent) {
    await server.start();
  }

  console.log('Server running at:', server.info.uri);
};

start();

module.exports = server;
