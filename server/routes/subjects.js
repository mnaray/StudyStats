const express = require("express");
const router = express.Router();
const addSubject = require("../lib/addSubject");

router.get("/", (req, res) => {
    res.send("Subjects route 📚");
});

router.post("/", async (req, res) => {
    try {
        const subject = req.body;
        const result = await addSubject(subject);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
