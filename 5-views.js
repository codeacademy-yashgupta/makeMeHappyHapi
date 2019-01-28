/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
const hapi = require('hapi');
const vision = require('vision');

const server = new hapi.Server({
  host: 'localhost',
  port: 3000,
});

const start = async () => {
  await server.register(vision);
  server.views({
    engines: {
      html: require('handlebars'),
    },
    relativeTo: __dirname,
    path: 'templates',
  });
  await server.start();
  console.log(`Server started at port ${server.info.uri}`);
};
const routes = [
  {
    method: 'POST',
    path: '/',
    handler(request, response) {
      console.log(request.query.name);
      const data = {
        name: `${request.query.name}`,
      };

      return response.view('index', data);
    },
  },
];

server.route(routes);
start();
