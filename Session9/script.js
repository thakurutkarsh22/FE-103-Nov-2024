import teamsData from "./data.js";

const teamsContainer = document.getElementById("teams-container");



const teamContentContainer = document.getElementById("team-content-container");

// 1. Display team pill 


function displayPill(teams = []) {
    teams.forEach(team => {
        const {name, id} = team;

        const teamPillElement = document.createElement("div");
        teamPillElement.className = "card m-2"
        teamPillElement.innerHTML = `<div id=${id} class="card-body">${name}</div>`

        teamsContainer.append(teamPillElement);
    })
}

displayPill(teamsData)


// 2. adding carousel

teamsContainer.addEventListener("click", (event) => {
    const teamSelected = event.target.id; // mun
    const selectedTEamData = teamsData.find(team => team.id === teamSelected)

    const {images = []} = selectedTEamData;


    // add the BLANK carousel
    teamContentContainer.innerHTML = getCarouselOuterLayer();

    const carouselInner = document.getElementById("carousel-inner");

    // fill the carousel 
    images.forEach((image, index) => {
        const divElement = document.createElement("div");
        divElement.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        divElement.innerHTML = `
            <img src=${image} class="d-block w-100" alt="..."> 
            <div>hello</div>
            <h1>${index} Heading</h1>
        
        `

        carouselInner.append(divElement);
    })
})



function getCarouselOuterLayer() {
    return `
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div id="carousel-inner" h-50 class="carousel-inner">
           
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    
    
    `
}