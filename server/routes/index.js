const glossariesController = require('../controllers').glossaries;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the IMMT API!',
  }));

  app.post('/api/glossary', glossariesController.create);
  app.get('/api/glossary', glossariesController.list);
  app.get('/api/glossary/:glossaryId', glossariesController.retrieve);
  app.put('/api/glossary/:glossaryId', glossariesController.update);
  app.delete('/api/glossary/:glossaryId', glossariesController.destroy);
};
