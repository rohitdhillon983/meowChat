const corsOptions = {
    origin: [
      "https://mern-meowchat.netlify.app",
      "https://mern-meowchat.netlify.app",
      process.env.CLIENT_URL,
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  };
  
  const CHATTU_TOKEN = "chattu-token";
  
  export { corsOptions, CHATTU_TOKEN };
  