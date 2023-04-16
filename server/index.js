require('dotenv').config()
const app = require('./server');// app is all the configuration of the server

const {
  PORT=3333,
  HOST='127.0.0.1'
} = process.env;

const server = app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});

require('./process-handlers')(server);