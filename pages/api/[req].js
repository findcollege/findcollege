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
        path: "/api/questions/math",
        description: "get all math questions",
      },
      {
        path: "/api/questions/writing",
        description: "get all writing questions",
      },
      {
        path: "/api/questions/[id]",
        description: "get an especific question with the id",
      },
    ],
  };
  res.status(200).json(response);
};

export default handler;
