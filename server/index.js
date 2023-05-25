require('dotenv').config();
const express = require ('express');
const cors = require('cors');
const db = require('./db.js')
const app = express()
// const controller = require('./controller');

app.use(cors());


// questions
/** ******** */
// app.get('/qa/questions', controller.getQuestions);
// app.post('/qa/questions', controller.addQuestion);
// app.post('/qa/questions/:question_id/answers', controller.addAnswer);
// app.put('/qa/questions/:question_id/helpful', controller.markHelpfulQuestion);
// app.put('/qa/answers/:answer_id/helpful', controller.markHelpfulAnswer);
// app.put('/qa/answers/:answer_id/report', controller.reportAnswer);
//


app.listen(process.env.PORT || 3000);
console.log(`Listening at http://localhost:${process.env.PORT || 3000}`);