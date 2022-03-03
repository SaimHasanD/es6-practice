class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "Our school"
    }
}

const student1 = new Student(20, "ibrahim");
const student2 = new Student(22, "Mushi");
const student3 = new Student(21, "sumon");
const student4 = new Student(19, "sabbir");

console.log(student1, student2, student3);
console.log(student4.name);