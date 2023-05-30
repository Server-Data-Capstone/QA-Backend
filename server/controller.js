const model = require('./model.js');

module.exports = {
  getQuestions: (req, res) => {
    if (req.query.page > 1) {return res.status(200).send({ results: [] })}
    else {
    model.getQuestions(req.query.id)
      .then(r => res.status(200).send({ results: r.rows }))
      .catch(e => res.status(500).send(e));
    }
  },

  addQuestion: (req, res) => {
    model.addQuestion(req.body)
    .then(r => res.status(200).send('Question added!'))
    .catch(e => res.status(500).send(e));
   },

  markQuestionHelpful: (req, res) => {
    model.markQuestionHelpful(req.query.id)
      .then(r => res.status(200).send('Thank you!'))
      .catch(e => res.status(500).send(e));
  },

  reportQuestion: (req, res) => {
    model.reportQuestion(req.query.id)
    .then(r => res.status(200).send('Question reported.'))
    .catch(e => res.status(500).send(e));
   },

  getAnswers: (req, res) => {
    if (req.query.page > 1) {return res.status(200).send({ results: [] })}
    else {
    model.getAnswers(req.query.id)
      .then(r => res.status(200).send({ results: r.rows }))
      .catch(e => res.status(500).send(e));
    }
   },

  addAnswer: (req, res) => {
    model.addAnswer(req.body)
    .then(r => res.status(200).send('Answer added!'))
    .catch(e => res.status(500).send(e));
   },

  markAnswerHelpful: (req, res) => {
    model.markAnswerHelpful(req.query.id)
    .then(r => res.status(200).send('Thank you!'))
    .catch(e => res.status(500).send(e));
  },

  reportAnswer: (req, res) => {
    model.reportAnswer(req.query.id)
    .then(r => res.status(200).send('Question reported.'))
    .catch(e => res.status(500).send(e));
   },

}

