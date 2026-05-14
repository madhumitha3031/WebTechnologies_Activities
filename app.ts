// Tuple

let studentInfo:[string, number] =

["Priyadharshini", 22];

console.log(studentInfo);

// Union Type

let studentId:string | number;

studentId = 101;

console.log(studentId);

// Object Type

type Student = {

  name:string;

  department:string;

  college:string;

  skills:string[];

  completed:number;

  total:number;
};

// Student Object

let studentData:Student = {

  name:"Madhumitha",

  department:"MCA",

  college:"KSRCT",

  skills:[

    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React"
  ],

  completed:8,

  total:10
};

console.log(studentData);

// Skills Array

let studentSkills:string[] = [

  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React"
];

console.log(studentSkills);

// Function to Calculate Completion

function calculateCompletion(

  completed:number,

  total:number

):number{

  return (completed / total) * 100;
}

// Function Call

let completionPercentage:number =

calculateCompletion(

  studentData.completed,

  studentData.total
);

console.log(

  "Profile Completion: " +

  completionPercentage + "%"
);

// Get HTML Elements

const progressBar =

document.getElementById("progressBar");

const progressText =

document.getElementById("progressText");

// Check Elements

if(progressBar && progressText){

  // Set Progress Bar Width

  progressBar.style.width =

  completionPercentage + "%";

  // Show Percentage Text

  progressText.innerHTML =

  "Profile Completion: " +

  completionPercentage + "%";

  // Animation

  let currentCount:number = 0;

  let interval = setInterval(() => {

    if(currentCount >= completionPercentage){

      clearInterval(interval);
    }

    else{

      currentCount++;

      progressText.innerHTML =

      "Profile Completion: " +

      currentCount + "%";
    }

  },30);
}