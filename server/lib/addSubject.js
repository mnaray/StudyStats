const subjectBase = require("./subjectBase");

const addSubject = async (subject) => {
    const subjects = await subjectBase.insert(subject);
    return subjects;
};

module.exports = addSubject;
