const { Deta } = require("deta");

const deta = Deta();
const subjectBase = deta.Base("subjects");

module.exports = subjectBase;
