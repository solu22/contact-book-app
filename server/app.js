/* Express server config */
import config from "./utils/config.js";
import express from "express";

import cors from "cors";
import userRouter from "./routers/user.js";
import middleware from "./utils/middleware.js";
import logger from "./utils/logger.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

logger.info("Connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB", error.message);
  });
  app.use(cors());
app.use(userRouter);

app.use(middleware.requestLogger);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

export default app;
