#! /usr/bin/env node
//look for entities i.e. here University => courses, students, department, instructors
//Nouns and Verbs. Nouns are objects and Verbs are methods here. 
//Classes = person(student)/course/department 
//person properties= getname
//student and instructor inherit from person.
//association and aggregation 
//OOP utility: Inheritance used, OOP is way of coding. 
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getname() {
        return this.name;
    }
}
; //Person class created
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age); //require from person class
        this.rollNumber = rollNumber;
    }
    registerForCourse(course) {
        this.courses.push(course); //elements will be pushed
    }
}
const student1 = new Student("Zahid", 29, "Zahid9090");
// student1.registerForCourse('PIAIC')
// student1.registerForCourse("metaverse")
const student2 = new Student("Usman", 26, "Musa9090");
// console.log(student1)
// console.log(student2)
class Instructor extends Person {
    salary; //can be accessed from within but not outside
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
const instructor1 = new Instructor("Adil", 35, 100000);
// instructor1.assignCourse('PIAIC')
// instructor1.assignCourse('Web 3.0')
// instructor1.assignCourse('JS')
// instructor1.assignCourse('TS')
// console.log(instructor1);
// console.log(instructor1.courses)
const instructor2 = new Instructor("Hira", 32, 80000); //pass the elements in  the constructor
// instructor2.assignCourse('metaverse')
// console.log(instructor2);
class Course {
    id;
    name;
    students = [];
    instructor;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
        student.registerForCourse(this);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
        instructor.assignCourse(this); //current course will print here
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const course1 = new Course('Artificial Intelligence', 'PIAIC');
const course2 = new Course('Blockchain', 'Web 3.0');
course1.addStudent(student1);
course1.addStudent(student2);
course1.setInstructor(instructor1);
const department1 = new Department("Computer Science");
department1.addCourse(course1); //by putting rest parameters we can add more courses
department1.addCourse(course2);
console.log(department1);
export {};
// console.log(course1.students)
// console.log(student1.courses)
// console.log(course1.instructor)
//Anything related to student is inside one object.(name, age, registration; methods and properties all in one place. Same for Instructors, Courses and Departments. So, it is now all manageable)
//can be integrated with inquirer. Ask about courses, instructor and etc.
//Deployed on NPM
//npm i ums-system-by-frank
//npx ums-system-by-frank
