
let texts = [

    "Frontend Developer",
    "Creative Designer",
    "JavaScript Developer",
    "TypeScript Learner"

];

let index = 0;

function changeText(){

    document.getElementById(
    "dynamicText")

    .innerHTML = texts[index];

    index++;

    if(index >= texts.length){

        index = 0;

    }

}

setInterval(changeText,2000);


function showWelcome(){

    alert(
    "Welcome to My Creative Portfolio"
    );

}



function projectAlert(){

    alert(
    "Project Opened Successfully"
    );

}



document.getElementById("contactForm")
.addEventListener("submit",

function(event){

    event.preventDefault();

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let phone =
    document.getElementById("phone").value;

    let valid = true;

    

    document.getElementById(
    "nameError").innerHTML = "";

    document.getElementById(
    "emailError").innerHTML = "";

    document.getElementById(
    "phoneError").innerHTML = "";

    

    if(name.length < 3){

        document.getElementById(
        "nameError").innerHTML =

        "Enter valid name";

        valid = false;

    }

  

    let emailPattern =
    /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){

        document.getElementById(
        "emailError").innerHTML =

        "Enter valid email";

        valid = false;

    }

  

    let phonePattern =
    /^[0-9]{10}$/;

    if(!phone.match(phonePattern)){

        document.getElementById(
        "phoneError").innerHTML =

        "Enter valid phone number";

        valid = false;

    }

  

    if(valid){

        alert(
        "Form Submitted Successfully ✅"
        );

        document.getElementById(
        "contactForm").reset();

    }

});



let skills = [

    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript"

];

console.log(skills);


let student = {

    name:"Madhu Mitha",

    course:"MCA",

    college:"KSR College of Technology"

};

console.log(student);