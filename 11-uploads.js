const hapi = require('hapi');
const fs = require('fs');

const server = new hapi.Server({
  host: 'localhost',
  port: Number(3000),
});


const start = async () => {
  const routes = {
    method: 'POST',
    path: '/upload',
    config: {
      payload: {
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data',
      },
    },

    handler(request, reply) {
      return new Promise((resolve, reject) => {
        let body = '';
        request.payload.file.on('data', (data) => {
          body += data;
        });
        request.payload.file.on('end', () => {
        // console.log(body);
          const jsonObject = {
            description: request.payload.description,
            file: {
              data: body,
              filename: request.payload.file.hapi.filename,
              headers: request.payload.file.hapi.headers,
            },
          };

          return resolve(JSON.stringify(jsonObject));
        });
        // console.log( request.payload.description);
        // console.log(request.payload.file.hapi.headers);
        // console.log(request.payload.file.hapi.filename);
      });
    },
  };

  server.route(routes);
  await server.start();
  console.log('Server started at port', server.info.uri);
};

start();

module.exports = server;
