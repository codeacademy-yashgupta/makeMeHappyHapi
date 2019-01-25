const hapi = require('hapi');


const server = hapi.server({
  host: 'localhost',
  port: 3000,
});

const init = async () => {
  await server.start();
  console.log(`Server started at port ${server.info.uri}`);
};
process.on ('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});
server.route({

  method: 'GET',
  path: '/{name}',
  handler: (request, h) => {
    return (`${encodeURIComponent(request.params.name)}`);
    // return `Hello ${request.param}`;
  },
});

// init();

module.exports = server;
