const fs = require('fs');
const path = require('path');

export default {
  HTTP_PORT: 80,
  HTTPS_PORT: 443,
  HTTPS_KEY: fs.readFileSync(path.resolve(__dirname, '../../pem/privkey.pem')),
  HTTPS_CERT: fs.readFileSync(path.resolve(__dirname, '../../pem/cert.pem')),
  UPLOAD_DIR: path.resolve(__dirname, './upload'),
}
