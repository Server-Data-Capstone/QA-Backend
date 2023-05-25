const model = require('./model.js');

module.exports = {
getQuestions: (req, res) => {
  console.log(req.query.product_id)
  model.getQuestions(req.query.product_id)
  .then(response => res.status(200).send(response.rows))


},

addQuestion: (req, res) => {},

markQuestionHelpful: (req, res) => {},


getAnswers: (req, res) => {},

addAnswer: (req, res) => {},

markAnswerHelpful: (req, res) => {},

reportAnswer: (req, res) => {},

}