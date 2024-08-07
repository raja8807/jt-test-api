const express = require("express");

const cors = require("cors");

const app = express();

const routes = require("./routes");

app.use(express.json());

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(routes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`app started on port ${PORT}`);
});
