const express = require("express");
const router = express.Router();

const topics = [
  { id: 1, name: "C++", description: "Learn C++ from basics to advanced." },
  { id: 2, name: "React", description: "Learn React for building UIs." },
];

router.get("/", (req, res) => {
  res.json(topics);
});

router.get("/:id", (req, res) => {
  const topic = topics.find((t) => t.id === parseInt(req.params.id));
  if (!topic) return res.status(404).send("Topic not found.");
  res.json(topic);
});

module.exports = router;
