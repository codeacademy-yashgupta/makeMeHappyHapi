const hapi = require('hapi');
const server = hapi.server({
  host: 'localhost',
  port: 3000
});

const routes= require('./routes/routes.js');

server.route(routes);
const init = async () => {
  await server.start();
  console.log(`Server started at port ${server.info.uri}`)
}
process.on ('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});


init();
// module.exports = server;