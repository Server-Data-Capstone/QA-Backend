const db = require('./db.js');

module.exports = {
  getQuestions: (productId) => {
    const queryStr = `SELECT * FROM questions WHERE product_id = ${productId} AND reported = 0`;
    console.log('this is queryStr', queryStr)
    return db.query(queryStr)
  },

  addQuestion: (data) => { },

  markQuestionHelpful: (questionId) => {
    const queryStr = `UPDATE questions SET question_helpfulness = question_helpfulness + 1 WHERE id = ${questionId}`;
    return db.query(queryStr)
  },


  getAnswers: (questionId) => { },

  addAnswer: (data) => { },

  markAnswerHelpful: (answerId) => { },

  reportAnswer: (answerId) => { },

}