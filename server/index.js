const express = require("express");
const cors = require("cors");
require("dotenv").config();

// express setup
const app = express();
app.use(express.json());
app.use(cors());
app.disable("etag"); // disables automatic caching

// auth0 setup
const { auth } = require("express-oauth2-jwt-bearer");

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: process.env.AUTH0_TOKEN_SIGNING_ALG,
});

// enforce authorization on all routes
app.use(checkJwt);

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
