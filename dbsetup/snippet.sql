INSERT qlinka (question_id, answer_id)
FROM

SELECT * FROM questions WHERE product_id = 1
JOIN
answers WHERE answers.question_id = questions.id

SELECT * FROM questions JOIN answers ON answers.question_id = questions.id WHERE questions.product_id = 1

ALTER TABLE answers RENAME COLUMN id to answer_id;

ALTER TABLE answers RENAME COLUMN answer_date to date;

SELECT *
FROM answers
LEFT JOIN answersphotos
ON answers.answer_id = answersphoto.answer_id
WHERE answers.question_id = _______


SELECT answers.id, body, answer_date, answerer_name, helpfulness,
jsonb_agg(jsonb_build_object(
  'id', answersphoto.answer_id,
  'url', answersphoto.url
  )) photos
FROM answers
LEFT JOIN answersphoto
ON answers.id = answersphoto.answer_id
WHERE answers.question_id = 1
GROUP BY answers.id;



EXPLAIN ANALYZE SELECT * FROM questions WHERE product_id = 963980;

SELECT setval('questions_id_seq', MAX(question_id)) FROM questions;

SELECT setval('answers_id_seq', MAX(answer_id)) FROM answers;

SELECT setval('answersphoto_id_seq', MAX(id)) FROM answersphoto;

