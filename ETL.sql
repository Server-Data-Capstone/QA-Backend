COPY questions FROM 'RawData/questions.csv' DELIMITER ',' CVS HEADER;

COPY answers FROM 'RawData/answers.csv' DELIMITER ',' CVS HEADER;

COPY answersphoto FROM 'RawData/answers_photos.csv' DELIMITER ',' CVS HEADER;