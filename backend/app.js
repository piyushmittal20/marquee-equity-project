const express = require("express");
const db = require("./db");
const companyRoute = require("./routes/company");
const cors = require("cors");

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", companyRoute);

app.use((req, res, next) => {
  const error = new Error("API endpoint does not exist");
  error.statusCode = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({
    message: message,
    data: data,
  });
});

app.listen(4000, () => {
  console.log("Server listening...");
});
