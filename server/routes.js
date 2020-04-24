const charactersRouter = require('./routes/characterRouter');

function routes(app) {
  app.use('/api/v1/characters/', charactersRouter);
}

module.exports = routes;
