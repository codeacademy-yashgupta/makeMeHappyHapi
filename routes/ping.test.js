const testPing = require('./server.js');

describe('testPing', () => {
  
  const options = {
    method: 'GET',
    url: '/ping'
  }
  it('should return pong on http get request to /ping', async () => {
    const response = await testPing.inject(options);
    expect(response.result).toEqual('pong');
  });
});