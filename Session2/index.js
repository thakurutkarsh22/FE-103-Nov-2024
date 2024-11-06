const redElement = document.getElementById("red");
const greenElement = document.getElementById("green");
const blueElement = document.getElementById("blue");
const yellowElement = document.getElementById("yellow");

const targetElement = document.getElementById("target");

// DOES addEventListener takes space ? 
// YES, more Event listner more space consumed in RAM 

// if you have 5000 color will you add 5000 eventListner ? NO 

/*
redElement.addEventListener("click", (event) => {
    targetElement.style.background = "red"

    const culpritElement = event.target;
    const id_color = culpritElement.id; // red

    targetElement.innerHTML = "Selected Color: " + id_color;
    console.log(id);
})

greenElement.addEventListener("click", (event) => {
    const color = event.target.id;
    
    targetElement.style.background = color
    targetElement.innerHTML = "Selected Color: " + color;
})

blueElement.addEventListener("click", (event) => {
    const color = event.target.id;
    
    targetElement.style.background = color
    targetElement.innerHTML = "Selected Color: " + color;
})

yellowElement.addEventListener("click", (event) => {
    const color = event.target.id;
    
    targetElement.style.background = color
    targetElement.innerHTML = "Selected Color: " + color;
});

// Total COST: - 4 

*/


// EVENT DELIGATION

/*
const colorsElement = document.getElementById("colors");

colorsElement.addEventListener("click", (event) => {
    console.log("clicked");
    const color = event.target.id;
    
    targetElement.style.background = color
    targetElement.innerHTML = "Selected Color: " + color;
})



// TOTAL COST: 1 
*/



// FORm

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

    // SEND appointmentObject to the SERVER 

    console.dir(appointmentObject);

})
