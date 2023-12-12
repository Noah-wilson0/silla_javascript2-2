class Lecture{
    constructor(hasTutor,lectID,members){
        this.hasTutor=hasTutor;
        this.lectID=lectID;
        this.members=members;
    }
}
let lecture1=new Lecture(true,"L001",["Ahn","Han","Park"]);
let lecture2=new Lecture(false,"L002",["Choi","Kim"]);
// console.log(lecture1);
function getStudents(lecture){
   let tutor,students
    if(lecture.hasTutor==false){
        [tutor,students]=[,lecture.members];
        // console.log(tutor);
        // console.log(students);
    }
    if(lecture.hasTutor==true){
        [tutor,...students]=lecture.members;
        // console.log(tutor);
        // console.log(students);
    }
    console.log(`강의:${lecture.lectID}, 수강생:${students}`);
}
getStudents(lecture1);
getStudents(lecture2);
