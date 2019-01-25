const hapi = require('hapi');

const server = hapi.server({
  host: 'localhost',
  port: 3000
});

const init = async () => {
  await server.start();
  console.log(`Server started at port ${server.info.uri}`)
}
process.on ('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return `Hello hapi`
  }
})


// init();
module.exports = server;