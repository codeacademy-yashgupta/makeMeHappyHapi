const helloHapi = require('./1-hello-hapi.js');

describe('helloHapi', () => {
  
  const options = {
    method: 'GET',
    url: '/'
  }
  it('should return "Hello hapi"', async () => {
    // process.argv=['node', '1-hello-hapi.js', '3000'];
    const response = await helloHapi.inject(options);
    //console.log(response);
    expect(response.result).toEqual('Hello hapi')
  });
});