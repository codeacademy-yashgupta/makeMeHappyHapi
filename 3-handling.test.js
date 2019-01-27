const serveHTML = require('./3-handling.js');

describe('serveHTML', () => {
  it('should give an html output', async (done) => {
    const options = {
      method: 'GET',
      url: '/',
    };
    const response = await serveHTML.inject(options);
    // console.log(response);
    expect(response.result).toEqual(`<html>
    <head><title>Hello Handling</title></head>
    <body>
        Hello Handling
    </body>
</html>`);
    done();
  });

  it('should return 404 when the path is not defined in the routes', async () => {
    const options = {
      method: 'GET',
      url: '/a',
    };
    const response = await serveHTML.inject(options);
    expect(response.statusCode).toEqual(404);
  });
});
