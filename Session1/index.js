

const counterElement = document.getElementById("counter");
console.log(counterElement);

// counterElement.innerHTML = "<script>  mallicious code  </script>"; // INPUT SANITAZIATION. 


const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
console.log(incrementButton);
console.log(decrementButton);


incrementButton.addEventListener("click", (event) => {
    const oldCOunt = counterElement.innerText;
    const newCount = Number(oldCOunt) + 1;
    counterElement.innerText = newCount;
} )

decrementButton.addEventListener("click", (event) => {
    const oldCOunt = counterElement.innerText;
    const newCount = Number(oldCOunt) - 1;
    counterElement.innerText = newCount;
} )




//  --------- 


const containerElemetn = document.getElementById("container");

containerElemetn.addEventListener("click", (event) => {

    containerElemetn.innerHTML = "box clicked!!!"
    containerElemetn.style.background = "green";

    console.log(event)
})

containerElemetn.addEventListener("mouseover", (event) => {

    containerElemetn.innerHTML = "box entered!!!"
    containerElemetn.style.background = "yellow";

    console.log(event);

})

containerElemetn.addEventListener("mouseout", (event) => {

    containerElemetn.innerHTML = "box"
    containerElemetn.style.background = "";


})



const eletnt = document.createElement("div")
eletnt.className = "banner"