const subjectBase = require("./subjectBase");

const getAllSubjects = async (userId) => {
    const subjects = await subjectBase.fetch({ userId: userId });
    return subjects;
};

module.exports = getAllSubjects;
