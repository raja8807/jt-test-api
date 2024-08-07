const express = require("express");

const router = express.Router();

//Get all todos.
router.get("/", async (req, res) => {
  return res.send({
    data: "ok",
  });
});
router.get("/test/:id", async (req, res) => {
  return res.send({
    data: req.params.id,
  });
});

module.exports = router;
