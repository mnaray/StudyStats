const express = require("express");
const router = express.Router();
const addSubject = require("../lib/addSubject");
const getAllSubjects = require("../lib/getAllSubjects");

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

router.get("/getAll", async (req, res) => {
    try {
        const userId = req.body.userId;

        if (!userId) {
            throw new Error("Missing userId");
        }

        const result = await getAllSubjects(userId);

        if (result.count === 0) {
            res.status(404).json({
                error: `No subjects found for user ${userId}`,
            });
            return;
        }

        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
