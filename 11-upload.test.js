const uploadFile = require('./11-uploads.js');
const FormData = require('form-data');
const streamToPromise = require('stream-to-promise');
const fs = require('fs');

let form = new FormData();
form.append('description', 'my value');
form.append('my_buffer', new Buffer(10));
form.append('file', fs.createReadStream('./public/new.txt'));
let headers = form.getHeaders();

// console.log(form);



describe('uploadFile', () => {
  it('should return a object containing file description, body, headers', async () => {
    const injectOptions = {
      method: 'POST',
      url: '/upload',
      
    }
  })
})