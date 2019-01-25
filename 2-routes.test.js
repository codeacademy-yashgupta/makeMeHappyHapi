const printNames = require('./2-routes.js');

describe('print names', () => {
  const options = {
    method: 'GET',
    url: '/yash',
  };
  it('should print the name after ', async () => {
    const response = await printNames.inject(options);
    expect(response.result).toEqual('yash');
  });
  const options2 = {
    method: 'GET',
    url: 'sfad',
  };

  it('should return bad request', async () => {
    const response = await printNames.inject(options2);
    expect(response.statusCode).toEqual(400);
  });
});
