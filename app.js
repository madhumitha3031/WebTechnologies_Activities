"use strict";
// Tuple
let studentInfo = ["Madhumitha", 22];
console.log(studentInfo);
// Union Type
let studentId;
studentId = 101;
console.log(studentId);
// Student Object
let student = {
    name: "Priyadharshini",
    department: "MCA",
    college: "KSRCT",
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript"
    ]
};
console.log(student);
// Skills Array
let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React"
];
console.log(skills);
// Function
function calculateCompletion(completed, total) {
    return (completed / total) * 100;
}
// Function Call
let completionPercentage = calculateCompletion(8, 10);
console.log("Profile Completion Percentage: " +
    completionPercentage + "%");
// Display in Webpage
document.getElementById("completion");
!.innerHTML;
"Profile Completion: " +
    completionPercentage + "%";
