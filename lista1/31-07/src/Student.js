"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    name;
    grade1;
    grade2;
    constructor(name, grade1, grade2) {
        this.name = name;
        this.grade1 = grade1;
        this.grade2 = grade2;
    }
    getName() {
        return this.name;
    }
    getGrade1() {
        return this.grade1;
    }
    getGrade2() {
        return this.grade2;
    }
    setName(name) {
        this.name = name;
    }
    setGrade1(grade1) {
        this.grade1 = grade1;
    }
    setGrade2(grade2) {
        this.grade2 = grade2;
    }
    calculateAverage() {
        const average = (this.grade1 + this.grade2) / 2;
        if (average >= 7) {
            console.log("Você foi aprovado");
        }
        else {
            console.log("Você foi reprovado");
        }
    }
    approved() {
    }
}
exports.Student = Student;
