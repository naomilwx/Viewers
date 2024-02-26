var express = require('express');

var app = express();

app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');

  next();
});

app.use(express.static('/app/dist'));
app.get('*', (req, response) => {
  response.sendFile('/app/dist/index.html');
});

app.listen(3000);
