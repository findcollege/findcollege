import questions from "datasets/sat_questions";

const handler = (req, res) => {
  res.status(200).json(questions.writing);
};

export default handler;
