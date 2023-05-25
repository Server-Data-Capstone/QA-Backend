const db = require('./db.js');

module.exports = {
  getQuestions: (productId) => {
    const queryStr = `SELECT * FROM questions WHERE product_id = ${productId} AND reported = 0`
    console.log('this is queryStr', queryStr)
    return db.query(queryStr)
  },

  addQuestion: (data) => {},

  markQuestionHelpful: (productId) => {},


  getAnswers: (questionId) => {},

  addAnswer: (data) => {},

  markAnswerHelpful: (answerId) => {},

  reportAnswer: (answerId) => {},

}