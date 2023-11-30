const Subject = require("./subject");
const subjectBase = require("./subjectBase");

const addSubject = async (subjectDto) => {
    // validate subject
    const subject = new Subject(subjectDto);
    if (!subject) {
        throw new Error("Subject is undefined");
    }

    // add valid subject to database
    const result = await subjectBase.insert(subjectDto);
    return result;
};

module.exports = addSubject;
