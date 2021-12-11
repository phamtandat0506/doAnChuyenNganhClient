const express= require('express')

const { createProxyMiddleware } = require('http-proxy-middleware');


const app = express();

app.use('/api', createProxyMiddleware({ 
    'target': 'http://127.0.0.1:4000',
     'changeOrigin': true,
      "secure": false }));
app.listen(3000);

// module.exports = function(app) {
//   app.use(proxy('/api', createProxyMiddleware({ // https://github.com/chimurai/http-proxy-middleware
//     target: "http://localhost:4000",
//     changeOrigin: true,
//   })));
// };