DROP DATABASE IF EXISTS qa;

CREATE DATABASE qa;

\c qa;

CREATE TABLE IF NOT EXISTS questions (
  question_id SERIAL PRIMARY KEY,
  product_id INTEGER,
  question_body TEXT,
  question_date BIGINT,
  asker_name TEXT,
  asker_email TEXT,
  reported INTEGER DEFAULT 0,
  question_helpfulness INTEGER
);

CREATE TABLE IF NOT EXISTS answers (
  answer_id SERIAL PRIMARY KEY,
  question_id INTEGER,
  body TEXT,
  date BIGINT,
  answerer_name TEXT,
  answer_email TEXT,
  reported INTEGER,
  helpfulness INTEGER,

  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE IF NOT EXISTS answersphoto (
  id SERIAL PRIMARY KEY,
  answer_id INTEGER,
  url TEXT,

  FOREIGN KEY (answer_id) REFERENCES answers(id)
);