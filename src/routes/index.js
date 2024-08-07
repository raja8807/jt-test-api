const express = require("express");

const router = express.Router();

//Get all todos.
router.get("/", async (req, res) => {
  return res.send({
    data: "ok",
  });
});

module.exports = router;
