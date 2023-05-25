CREATE TABLE IF NOT EXISTS questions (
  id SERIAL PRIMARY KEY,
  product_id INTEGER,
  question_body TEXT,
  question_date BIGINT,
  asker_name TEXT,
  asker_email TEXT,
  reported INTEGER DEFAULT 0,
  question_helpfulness INTEGER
);

CREATE TABLE IF NOT EXISTS answers (
  id SERIAL PRIMARY KEY,
  question_id INTEGER,
  body TEXT,
  answer_date BIGINT,
  answerer_name TEXT,
  answer_email TEXT,
  helpfulness INTEGER,
  reported INTEGER,

  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE IF NOT EXISTS answersphoto (
  id SERIAL PRIMARY KEY,
  answer_id INTEGER,
  url TEXT,

  FOREIGN KEY (answer_id) REFERENCES answers(id)
);

CREATE TABLE IF NOT EXISTS qlinka (
  question_id INTEGER,
  answer_id INTEGER,

  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (answer_id) REFERENCES answers(id)
);

CREATE TABLE IF NOT EXISTS alinkp (
  answer_id INTEGER,
  photo_id INTEGER,

  FOREIGN KEY (answer_id) REFERENCES answers(id),
  FOREIGN KEY (photo_id) REFERENCES answersphoto(id)
);

