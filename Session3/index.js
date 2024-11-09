// FORm


const KEY = "formData"

const formElement = document.getElementById("booking-form");

formElement.addEventListener("submit", (event) => {
    // The page reloads after submission of FORM. (DEFAULT BEHAVIORS)

    event.preventDefault();  // STOP THE RELOAD

    console.log("submit the form!!!");

    const form = event.target;


    const name = form.elements["fullName"].value;
    const email = form.elements["email"].value;
    const doctor = form.elements["doctor"].value;
    const location = form.elements["location"].value;
    const date = form.elements["date"].value;

    const appointmentObject = {
        name: name,
        email: email,
        doctor,
        location,
        date
    }

    if(validate(appointmentObject)) {
        // SEND appointmentObject to the SERVER 
        console.dir(appointmentObject);

    } else {
        alert("fix your Input Form");
    }

})

const nameInfoElement = document.getElementById("name-info");
const emailInfoElement = document.getElementById("email-info");

function validate(payload) {

    const {name, email, doctor, location, date} = payload;
    
    // NAME: 
    const isNameValid = validateName(name); // caes that will not work r b 
   
    // EAMIl 
    const isEmailValid = validateEmail(email);


    return isNameValid && isEmailValid;

}

function validateName(name) {
    let isValid = true;

    const trimmedName = String(name).trim(); // deletes the spaces before and after
    const nameRegex = /^[A-Za-z\s\-.']+$/;
    
    if(!trimmedName) {
        isValid = false;
        nameInfoElement.innerText = "Name Should Not be empty";
    } else if (trimmedName.length < 3) {
        isValid = false;
        nameInfoElement.innerText = "Name should have min 3 character";
    } else if (!trimmedName.match(nameRegex)) {
        isValid = false;
        nameInfoElement.innerText = "Please enter correct name";
    }
    return isValid;
}

function validateEmail(email) {
    let isValid = true;

    const trimmedEmail = String(email).trim(); // deletes the spaces before and after
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    
    if(!trimmedEmail) {
        isValid = false;
        emailInfoElement.innerText = "Email Should Not be empty";
    } else if (!trimmedEmail.match(emailRegex)) {
        isValid = false;
        emailInfoElement.innerText = "Please enter correct email";
    }
    return isValid;
}

function validateDoctor(doctor) {
    // I am validating only if it is empty or not 

    return Boolean(doctor);
}


// PROACTIVENESS  (Focus and Blur event)


// ------------ EVENT FOCUS AND BLUR ---------------

const nameElement = formElement.elements["fullName"];
const emailElement = formElement.elements["email"];


nameElement.addEventListener("focus", () => {
    nameInfoElement.innerText = "";
})

nameElement.addEventListener("blur", (event) => {
    const name = event.target.value;
    const isNameValidated = validateName(name);
    if(!isNameValidated) {
        document.getElementById("Button").disabled = true;
    }
})


emailElement.addEventListener("focus", () => {
    emailInfoElement.innerText = "";
    document.getElementById("Button").disabled = false;
})

emailElement.addEventListener("blur", (event) => {
    const email = event.target.value;
    const isEmailValid = validateEmail(email);

    if(!isEmailValid) {
        document.getElementById("Button").disabled = true;
    }
})


// TODO: you can disable button also



// ---------- SAVING FORM  ----------------
// localstorage (5 MB/DOMAIN)


window.addEventListener("beforeunload", (event) => {
    const payload = {
        name: nameElement.value,
        email: emailElement.value
    }

    localStorage.setItem(KEY, JSON.stringify(payload));
})


document.addEventListener("DOMContentLoaded", () => {
    const stringValue = localStorage.getItem(KEY);
    const object = JSON.parse(stringValue);

    const {name, email} = object
    console.log(object, 'obj')

    nameElement.value = name;
    emailElement.value = email;

})




