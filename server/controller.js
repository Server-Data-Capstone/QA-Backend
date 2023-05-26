const model = require('./model.js');

module.exports = {
  getQuestions: (req, res) => {
    model.getQuestions(req.query.product_id)
      .then(r => res.status(200).send({ results: r.rows }))
      .catch(e => res.status(500).send(e));
  },

  addQuestion: (req, res) => { },

  markQuestionHelpful: (req, res) => {
    model.markQuestionHelpful(req.query.id)
      .then(r => res.status(200).send('Thank you!'))
      .catch(e => res.status(500).send(e));
  },


  getAnswers: (req, res) => {
    model.getAnswers(req.query.id)
      .then(r => res.status(200).send({ results: r.rows }))
      .catch(e => res.status(500).send(e));
   },

  addAnswer: (req, res) => { },

  markAnswerHelpful: (req, res) => {
    model.markAnswerHelpful(req.query.id)
    .then(r => res.status(200).send('Thank you!'))
    .catch(e => res.status(500).send(e));
  },

  reportAnswer: (req, res) => { },

}

