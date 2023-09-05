import express from "express";
import cors from "cors";

import { usersValidate } from "./validations/usersValidate.js";
import { handleValidationErrors } from "./utils/handleValidationErrors.js";
import { login } from "./controllers/UserController.js";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("1");
});

app.post("/login", usersValidate, handleValidationErrors, login);

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server running on port ${PORT}`);
});
