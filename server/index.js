const express = require("express");
const cors = require("cors");

// express setup
const app = express();
app.use(express.json());
app.use(cors());
app.disable("etag"); // disables automatic caching

// routes
app.use("/home", require("./routes/home"));
app.use("/subjects", require("./routes/subjects"));
app.use("/allTests", require("./routes/allTests"));

app.get("/", (req, res) => {
    res.send("StudyStats API 👾");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
