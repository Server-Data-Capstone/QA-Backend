COPY questions FROM '/QA-Backend/RawData/questions.csv' DELIMITER ',' CSV HEADER;
COPY answers FROM '/QA-Backend/RawData/answers.csv' DELIMITER ',' CSV HEADER;
COPY answersphoto FROM '/QA-Backend/RawData/answers_photos.csv' DELIMITER ',' CSV HEADER;

SELECT setval('questions_id_seq', MAX(question_id)) FROM questions;
SELECT setval('answers_id_seq', MAX(answer_id)) FROM answers;
SELECT setval('answersphoto_id_seq', MAX(id)) FROM answersphoto;

CREATE INDEX questions_productid_index ON questions USING HASH (product_id);
CREATE INDEX answer_index ON answers (question_id, answer_id);
CREATE INDEX photos_index ON answersphoto USING HASH (answer_id);
