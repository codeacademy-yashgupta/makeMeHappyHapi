const printNames = require('./2-routes.js');

describe('print names', () => {
  const options = {
    method: 'GET',
    url: '/yash',
  };
  it('should print the name after /', async () => {
    const response = await printNames.inject(options);
    expect(response.result).toEqual('yash');
  });
  const options2 = {
    method: 'GET',
    url: '/yash gupta',
  };

  it('should return bad request', async () => {
    const response = await printNames.inject(options2);
    expect(response.result).toEqual('yash%20gupta');
  });
  const options3 = {
    method: 'GET',
    url: '/sfad/a',
  };
  it('should return Not found when more than one indexed parameter is passed', async () => {
    const response = await printNames.inject(options3);
    expect(response.statusCode).toEqual(404);
  });
  const options4 = {
    method: 'GET',
    url: '/../',
  };
  it('should return Not found when more than one indexed parameter is passed', async () => {
    const response = await printNames.inject(options4);
    expect(response.statusCode).toEqual(404);
  });
});
