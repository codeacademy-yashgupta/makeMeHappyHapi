const serveHTML = require('./3-handling.js');

describe('serveHTML', () => {
  it('should give an html output', async () => {
    const options = {
      method: 'GET',
      url: '/',
    };
    const response = await serveHTML.inject(options);
    expect(response.result).toEqual(`<html>
    <head><title>Hello Handling</title></head>
    <body>
        Hello Handling
    </body>
</html>`);
  });
});
