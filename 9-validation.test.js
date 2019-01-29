const server = require('./9-validation.js');

describe('server', () => {
  const options = {
    method: 'GET',
    url: '/chicken/as',
  };
  it('should return the string "hi"', async () => {
    const result = await server.inject(options);
    expect(result.result).toEqual('hi');
  });
  it('should not return something else', async () => {
    const result = await server.inject(options);
    expect(result.result).not.toEqual('');
  });
  it('checking number in url', async () => {
    const result = await server.inject({ method: 'GET', url: '/234' });
    expect(result.result).toEqual({ error: 'Not Found', message: 'Not Found', statusCode: 404 });
  });
});
