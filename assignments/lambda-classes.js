// CODE here for your Lambda Classes
class Person {
    constructor(qualities) {
        this.name = qualities.name;
        this.age = qualities.age;
        this.location = qualities.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(qualities) {
        super(qualities);
        this.speciality = qualities.speciality;
        this.favLanguage = qualities.favLanguage;
        this.catchPhrase = qualities.catchPhrase;
        this.subject = qualities.subject;
    }
    demo(subject) {
        console.log(`Today we are learning about ${this.subject}`);
    }
    grade(student, subject) {
        console.log(`${this.student.name} receives a perfect score on ${this.subject}`);
    }
};

class Student extends Person {
    constructor(qualities) {
        super(qualities);
        this.previousBackground = qualities.previousBackground;
        this.className = qualities.className;
        this.favSubjects = qualities.favSubjects;
    }
    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++)
            console.log(this.favSubjects[i]);
    }
    PRAssignment(student, subject) {
        console.log(`${this.student.name} receives a perfect score on ${this.subject}`);
    }
    sprintChallenge(student, subject) {
        console.log(`${this.student.name} receives a perfect score on ${this.subject}`);
    }
};

class ProjectManager extends Person {
    constructor(qualities) {
        super(qualities);
        this.gradClassName = qualities.gradClassName;
        this.favInstructor = qualities.favInstructor;
        this.channel = qualities.channel;
    }
    StandUp() {
        console.log(`${this.name} announces to ${this.channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${this.subject}`);
    }

};

// Example People

let Asha = new Student({
    name: 'Asha',
    location: 'San Francisco',
    age: 20,
    favSubjects: 'History',
    previousBackground: 'College',
    className: 'Lambda'
});
let Archie = new Instructor({
    name: 'Archie',
    location: 'Riverdale',
    age: 15,
    favLanguage: 'JavaScript',
    specialty: 'Solving Mysteries',
    subject: 'fighting crime',
    catchPhrase: 'Hiram is bad!'
});

let Betty = new ProjectManager({
    name: 'Betty',
    location: 'Riverdale',
    age: 15,
    gradClassName: '2021',
    favInstructor: 'Ms. Grundy',
    catchPhrase: `Jughead is cool!`,
    channel: 'serpents'
});

let Veronica = new Instructor({
    name: 'Veronica',
    location: 'Riverdale',
    age: 16,
    favLanguage: 'HTML',
    specialty: 'CSS Preprocessing',
    catchPhrase: `Archie is great!`
});

// Tests

console.log(Asha);
Asha.speak();
Veronica.speak();
Betty.StandUp();
Archie.demo();