const db = require('./db.js');

module.exports = {
  getQuestions: (productId) => {
    const queryStr = `SELECT * FROM questions WHERE product_id = ${productId} AND reported = 0`;
    return db.query(queryStr)
  },

  addQuestion: (data) => { },

  markQuestionHelpful: (questionId) => {
    const queryStr = `UPDATE questions SET question_helpfulness = question_helpfulness + 1 WHERE id = ${questionId}`;
    return db.query(queryStr)
  },


  getAnswers: (questionId) => {
    console.log(questionId)
    const queryStr = `SELECT * FROM answers WHERE question_id = ${questionId} AND reported = 0`;
    return db.query(queryStr)
   },

  addAnswer: (data) => { },

  markAnswerHelpful: (answerId) => { },

  reportAnswer: (answerId) => { },

}