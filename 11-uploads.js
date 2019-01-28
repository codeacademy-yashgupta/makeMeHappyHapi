const hapi = require('hapi');
const fs = require('fs');

const server = new hapi.Server({
  host: 'localhost',
  port: Number(process.argv[2] || 3000),
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
      let body = '';
      request.payload.file.on('data', (data) => {
        body += data;
      });
      request.payload.file.on('end', () => {
        // console.log(body);
      });
      // console.log( request.payload.description);
      // console.log(request.payload.file.hapi.headers);
      // console.log(request.payload.file.hapi.filename);
      const jsonObject = {
        description: request.payload.description,
        file: body,
        filename: request.payload.file.hapi.filename,
        headers: request.payload.file.hapi.headers,
      };
      return jsonObject;
    },
  };

  server.route(routes);
  await server.start();
  console.log('Server started at port', server.info.uri);
};

start();
