const Glossary = require('../models').Glossary;

module.exports = {
  create(req, res) {
    return Glossary
      .create({
        term: req.body.term,
      })
      .then(glossary => res.status(201).send(glossary))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
     return Glossary
        .all()
        .then(glossary => res.status(200).send(glossary))
        .catch(error => res.status(400).send(error));
 },
 retrieve(req, res) {
  return Glossary
    .findById(req.params.glossaryId, {
    })
    .then(glossary => {
      if (!glossary) {
        return res.status(404).send({
          message: 'Glossary Not Found',
        });
      }
      return res.status(200).send(glossary);
    })
    .catch(error => res.status(400).send(error));
},
update(req, res) {
  return Glossary
    .findById(req.params.glossaryId, {
    })
    .then(glossary => {
      if (!glossary) {
        return res.status(404).send({
          message: 'Glossary Not Found',
        });
      }
      return glossary
        .update({
          term: req.body.term || glossary.term,
        })
        .then(() => res.status(200).send(glossary))  // Send back the updated todo.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},
destroy(req, res) {
  return Glossary
    .findById(req.params.glossaryId)
    .then(glossary => {
      if (!glossary) {
        return res.status(400).send({
          message: 'Glossary Not Found',
        });
      }
      return glossary
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
},
};
