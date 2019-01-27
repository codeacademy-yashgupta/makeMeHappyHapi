const directoryServer = require('./4-directory.js');
let fs = require('fs');



describe('directory Server', () => {
  it('should serve the file requested in param from the public folder', async () => {
    const filename = 'new.txt';
    const fileData = fs.readFileSync(`./public/${filename}`).toString();
    const options = {
      method: 'GET',
      url: `/${filename}`,
    };
    const response = await directoryServer.inject(options);
    console.log(response.result);
    expect(response.result).toEqual(fileData);
  });
  it('should not serve any other files other than the public directory', async () => {
    const filename = '../newOutsidePublic.txt';
    const options = {
      method: 'GET',
      url: `/${filename}`,
    };
    const response = await directoryServer.inject(options);
    console.log(response.result);
    expect(response.statusCode).toEqual(404);
  });
  it('should return 403 when root directory is accessed (no index.html)', async () => {
    const filename = '';
    const options = {
      method: 'GET',
      url: `/${filename}`,
    };
    const response = await directoryServer.inject(options);
    expect(response.statusCode).toEqual(403);
  });
});
