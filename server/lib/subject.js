class Subject {
    constructor(subject) {
        this.key = subject.key;
        this.name = subject.name;
        this.slug = subject.slug;
        this.tests = subject.tests;
        this.userId = subject.userId;
        this.validate();
    }

    validate() {
        for (const property in this) {
            if (this[property] === undefined && property !== "key") {
                throw new Error(`Subject ${property} cannot be undefined`);
            }
        }

        if (this.name.length < 1) {
            throw new Error("Subject name cannot be empty");
        }
        if (this.slug.length < 1) {
            throw new Error("Subject slug cannot be empty");
        }
        if (Array.isArray(this.tests) === false) {
            throw new Error("Subject tests must be in an array");
        }
        if (this.userId.length < 1) {
            throw new Error("Subject userId cannot be empty");
        }
        if (typeof this.key !== "string" && this.key !== undefined) {
            throw new Error("Subject key must be undefined or a string");
        }
    }
}

module.exports = Subject;
