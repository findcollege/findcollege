const handler = (req, res) => {
  const response = {
    message: "Hey! check the api docs",
    routes: [
      {
        path: "/api",
        description: "default endpoint",
      },
      {
        path: "/api/docs",
        description: "get api docs",
      },
      {
        path: "/api/test",
        description: "get 10 random questions",
      },
      {
        path: "/api/questions",
        description: "get all questions",
      },
      {
        path: "/api/question/math",
        description: "get all math questions",
      },
      {
        path: "/api/question/writing",
        description: "get all writing questions",
      },
      {
        path: "/api/question/[id]",
        description: "get an especific question with the id",
      },
    ],
  };
  res.status(200).json(response);
};

export default handler;
