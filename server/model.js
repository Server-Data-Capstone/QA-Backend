const db = require('./db.js');

module.exports = {
  getQuestions: (productId) => {

    const queryStr = `SELECT question_id, product_id, question_body, TO_TIMESTAMP(question_date/1000) AS question_date, asker_name, question_helpfulness
    FROM questions WHERE product_id = 1 AND reported = 0 ORDER BY question_helpfulness DESC`
    return db.query(queryStr)
  },

  addQuestion: (data) => {
    let timeNow = Date.now();
    const queryStr = `INSERT INTO questions (product_id, question_body, question_date, asker_name, asker_email, reported, question_helpfulness)
    VALUES (${data.id},'${data.question}',${timeNow},'${data.user_name}','${data.email}',0,0)`;
    return db.query(queryStr)
   },

  markQuestionHelpful: (questionId) => {
    const queryStr = `UPDATE questions SET question_helpfulness = question_helpfulness + 1 WHERE id = ${questionId}`;
    return db.query(queryStr)
  },

  reportQuestion: (questionId) => {
    const queryStr = `UPDATE questions SET reported = 1 WHERE question_id = ${questionId}`;
    return db.query(queryStr)
  },

  getAnswers: (questionId) => {
    const queryStr = `SELECT answers.answer_id, body, TO_TIMESTAMP(date/1000) AS date, answerer_name, helpfulness,
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

  addAnswer: (data) => {
    console.log('Shape of data', data);
    let timeNow = Date.now();
    const queryStr = `INSERT INTO answers (question_id, body, date, answerer_name, answerer_email, reported, helpfulness)
    VALUES (${data.id},'${data.answer}',${timeNow},'${data.user_name}','${data.email}',0,0)`;
    return db.query(queryStr)
  },

  markAnswerHelpful: (answerId) => {
    const queryStr = `UPDATE answers SET helpfulness = helpfulness + 1 WHERE answer_id = ${answerId}`;
    return db.query(queryStr)
  },

  reportAnswer: (answerId) => {
    const queryStr = `UPDATE answer SET reported = 1 WHERE question_id = ${answerId}`;
    return db.query(queryStr)
  },
}