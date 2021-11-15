import questions from "datasets/sat_questions";

const handler = (req, res) => {
  let result = undefined;
  const id = req.query.id;
  if (id.charAt(0) == "m") {
    result = questions.math.find((q) => q.id == id);
  } else if (id.charAt(0) == "w") {
    result = questions.writing.find((q) => q.id == id);
  }
  if (result != undefined) {
    res.status(200).json(result);
  } else {
    res.status(404).end();
  }
};

export default handler;
