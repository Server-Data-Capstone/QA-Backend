COPY questions FROM '/Users/owden/HackReactorPreProjects/QA-Backend/RawData/questions.csv' DELIMITER ',' CSV HEADER;

COPY answers FROM '/Users/owden/HackReactorPreProjects/QA-Backend/RawData/answers.csv' DELIMITER ',' CSV HEADER;

COPY answersphoto FROM '/Users/owden/HackReactorPreProjects/QA-Backend/RawData/answers_photos.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX questions_productid_index ON questions USING HASH (product_id);
CREATE INDEX answer_index ON answers (answer_id, question_id);
CREATE INDEX photos_index ON answersphoto USING HASH (answer_id);