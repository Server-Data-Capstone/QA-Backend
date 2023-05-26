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

    const queryStr = `SELECT answers.answer_id, body, date, answerer_name, helpfulness,
    jsonb_agg(jsonb_build_object(
      'id', answersphoto.answer_id,
      'url', answersphoto.url
      )) photos
    FROM answers
    LEFT JOIN answersphoto
    ON answers.answer_id = answersphoto.answer_id
    WHERE answers.question_id = ${questionId}
    GROUP BY answers.answer_id`

    return db.query(queryStr)
   },

  addAnswer: (data) => { },

  markAnswerHelpful: (answerId) => {
    const queryStr = `UPDATE answers SET helpfulness = helpfulness + 1 WHERE answer_id = ${answerId}`;
    return db.query(queryStr)
   },

  reportAnswer: (answerId) => { },

}