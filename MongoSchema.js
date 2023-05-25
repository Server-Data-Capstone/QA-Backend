let schema = mongoose.Schema({
  product_Id: {type: Number, unique: true},
  question: [
    {
      question_id: {type: Number, unique: true},
      question_date: String,
      asker_name: String,
      asker_email: String,
      question_helpfulness: Number,
      reported: Boolean
      answer: [
        {
          answer_Id: {type: Number, unique: true},
          body: String,
          created: String,
          answerer_name: String,
          answerer_email: String,
          helpfullness: Number,
          photos: [type: String]
        }
      ]
    }
  ]
});