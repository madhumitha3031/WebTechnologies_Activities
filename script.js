// Welcome Message

window.onload = function(){

  startTyping();
};

// Alert

function showMessage(){

  alert(
    "Thank you for visiting my portfolio!"
  );
}

// Typing Animation

const text = [

  "Frontend Developer",

  "Creative Designer",

  "JavaScript Programmer"
];

let count = 0;

let index = 0;

let currentText = "";

let letter = "";

function startTyping(){

  if(count === text.length){

    count = 0;
  }

  currentText = text[count];

  letter =
  currentText.slice(0, ++index);

  document.getElementById("typing")
  .textContent = letter;

  if(letter.length === currentText.length){

    count++;

    index = 0;
  }

  setTimeout(startTyping,150);
}

// Change Theme

function changeTheme(){

  const colors = [

    "#0f172a",
    "#1e293b",
    "#4c1d95",
    "#0c4a6e"
  ];

  let randomColor =

  colors[Math.floor(Math.random()*colors.length)];

  document.body.style.background =
  randomColor;
}

// Form Validation

function validateForm(){

  let name =
  document.getElementById("name").value;

  let email =
  document.getElementById("email").value;

  let phone =
  document.getElementById("phone").value;

  if(name === ""){

    alert("Enter your name");

    return false;
  }

  if(email === ""){

    alert("Enter your email");

    return false;
  }

  if(phone.length !== 10){

    alert(
      "Phone number must contain 10 digits"
    );

    return false;
  }

  alert("Form Submitted Successfully!");

  return true;
}