INSERT qlinka (question_id, answer_id)
FROM

SELECT * FROM questions WHERE product_id = 1
JOIN
answers WHERE answers.question_id = questions.id

SELECT * FROM questions JOIN answers ON answers.question_id = questions.id WHERE questions.product_id = 1

ALTER TABLE answers RENAME COLUMN id to answer_id;

ALTER TABLE answers RENAME COLUMN answer_date to date;

CREATE INDEX questions_productid_index ON questions USING HASH (product_id);
CREATE INDEX answer_index ON answers (answer_id, question_id);
CREATE INDEX photos_index ON answersphoto USING HASH (answer_id);

UPDATE answers SET helpfulness = helpfulness + 1 WHERE answer_id = 5;