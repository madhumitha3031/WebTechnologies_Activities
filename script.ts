

class Portfolio{

    studentName:string;

    department:string;

    constructor(
        name:string,
        dept:string
    ){

        this.studentName = name;

        this.department = dept;

    }

    displayDetails():void{

        console.log(

        "Student : " +
        this.studentName

        );

        console.log(

        "Department : " +
        this.department

        );

    }

}


let user = new Portfolio(

    "Madhu Mitha",

    "MCA"

);



user.displayDetails();

let projects:string[] = [

    "Portfolio Website",

    "Crop Recommendation System",

    "IoT Gate System"

];

console.log(projects);