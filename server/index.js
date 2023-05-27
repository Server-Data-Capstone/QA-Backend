require('dotenv').config();
const express = require ('express');
const cors = require('cors');
const db = require('./db.js')
const controller = require('./controller');

const app = express()
app.use(express.json())
app.use(cors());

//QUESTIONS
app.get('/qa/questions', controller.getQuestions);
app.post('/qa/questions', controller.addQuestion);
app.put('/qa/questions/helpful', controller.markQuestionHelpful);
app.put('/qa/questions/report', controller.reportQuestion);

//ANSWERS
app.get('/qa/answers', controller.getAnswers);
app.post('/qa/answers', controller.addAnswer);
app.put('/qa/answers/:answer_id/helpful', controller.markAnswerHelpful);
app.put('/qa/answers/:answer_id/report', controller.reportAnswer);

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);