const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Subjects route 📚");
});

module.exports = router;
