const mongoose = require('mongoose');
const Issue = mongoose.model('issues');

module.exports = (app) => {
  app.get(`/api/issues`, async (req, res) => {
    let issues = await Issue.find();
    return res.status(200).send(issues);
  });

  app.post(`/api/issues`, async (req, res) => {
    let issue = await Issue.create(req.body);
    return res.status(201).send({
      error: false,
      issue
    })
  })
}
