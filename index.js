import express, { json } from "express";
import cors from "cors";

import * as users from "./users.json" assert { type: "json" };

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("<h1>hell1o</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
