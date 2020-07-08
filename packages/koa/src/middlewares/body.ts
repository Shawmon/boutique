import koaBody from 'koa-body'
import CONFIG from '../config'

export default koaBody({
  multipart: true,
  encoding: 'gzip',
  formidable:{
    uploadDir: CONFIG.UPLOAD_DIR,
    keepExtensions: true,
    maxFieldsSize: 104857600,
  }
})
