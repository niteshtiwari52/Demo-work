import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import cors from "cors";
import helmet from "helmet";
// Database Connection import
import ConnectDB from "./database/connection";

import privateRoute from "./config/authorization";

/**
 *  Importing Routes
 */
import Welcome from "./routes/welcomeRoutes";
import Auth from "./routes/auth";
import User from "./routes/user";

dotenv.config();
privateRoute(passport);
const app = express();
app.use(express.json());
app.use(
  session({
    secret: "process.env.JWT_SECRET",

    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 4000;
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(helmet());
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Demo Server....",
  });
});

app.use("/api/v1/Welcome", Welcome);
app.use("/api/v1/auth", Auth);
app.use("/api/v1/user", User);

app.listen(PORT, () => {
  ConnectDB()
    .then(() => {
      console.log(
        `Demo Server is running on PORT: http://localhost:${PORT}\nDatabase Connected Succefully.....`
      );
    })
    .catch((error) => {
      console.log("Demo Server is Running but Database connection failed !!!");
      console.log(error);
    });
});
