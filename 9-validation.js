const hapi = require('hapi');
const Joi = require('joi');
const server = hapi.server({
  host: 'localhost',
  port: Number(process.argv[2] || 8080),
});

const start = async () => {
  // eslint-disable-next-line global-require
  await server.register(require('inert'));
  const routeConfig = {
    path: '/chicken/{breed}',
    method: 'GET',
    handler: (request, h) => {
      return `${request.param.breed}`;
    },
    config: {
      validate: {
        params: {
          with: Joi.string().required(),
          parameters: Joi.string().required(),
        },
      },
    },
  };
  server.route(routeConfig);
  // if (!module.parent) {
  await server.start();
  // }

  console.log('Server running at:', server.info.uri);
};

start();
