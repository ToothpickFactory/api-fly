const config          = require('config'),
      app             = require('express')(),
      cors            = require('cors'),
      bodyParser      = require('body-parser'),
      fs              = require('fs'),
      getDirectories  = require('./util/directoryFinder');

function startServer(){
  // APP Setup
  app.use(cors());
  app.use(bodyParser.json());

  // Require all routes from the routes directory
  getDirectories(__dirname + '/api/').forEach(dir => require(`${__dirname}/api/${dir}`)(app));

  // Start Server
  app.listen(config.ports.http, () => console.log(`API-FLY listening on port ${config.ports.http}!`))
    .on('error', (err) => console.log(err))
}

module.exports = startServer;
