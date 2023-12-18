
const modal = document.querySelector(".modal");
const overlay = document.querySelector("#overlay");
const API_URL = "https://majazocom.github.io/Data/solaris.json";
const SVGAPI_URL = "https://majazocom.github.io/Data/solarissvgs.json";
// global variabel för våra himlakroppar

// html-elementet där vårt solsystem ska ligga
const solarSystemContainer = document.querySelector(".solarsystem-container");


//get data
const fetchData = async () => {
  try {
    const response = await fetch(
      "https://majazocom.github.io/Data/solaris.json"
    );
                                             
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

fetchData();


// get the infromation about the planets
// step 1 get only the data
function fetchPlanets() {
  fetch("https://majazocom.github.io/Data/solaris.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // step 2 send the data to the funtion the display the button and the list
      
    displayPlanets(data); 
    });
}
function displayPlanets(planets) {
  const planetList = document.getElementById("planetList");

  planets.forEach((planet) => {
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = "Get Info";
    
    // Use a separate function to handle the click event
    button.addEventListener("click", () => displayPlanetInfo(planet));

    listItem.textContent = planet.name;
    listItem.appendChild(button);
    planetList.appendChild(listItem);
  });
}

// Separate function to display planet information
function displayPlanetInfo(planet) {
  // Modify this function to display information about the clicked planet
  console.log("Planet Info:", planet);
  // You can update this function to show a modal, update UI, etc.
}




// Declare global variables
let solarSystem = [];
let solarSystemSVGs = [];

async function getSolarSystem() {
  try {
    // Fetch solar system data
    const resp = await fetch("https://majazocom.github.io/Data/solaris.json");
    
    if (!resp.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the JSON response and store it in the global variable solarSystem
    solarSystem = await resp.json();

    // Fetch SVG data
    const svgResp = await fetch("https://majazocom.github.io/Data/solaris.json");
    
    if (!svgResp.ok) {
      throw new Error("Network response for SVGs was not ok");
    }

    // Parse the SVG JSON response and store it in the global variable solarSystemSVGs
    solarSystemSVGs = await svgResp.json();

    // Render the solar system data to the UI using the fetched data
    renderSolarSystemToUI();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// Call the function to initiate the process
getSolarSystem();

function renderSolarSystemToUI() {
  // Loop through all celestial bodies in the solar system
  solarSystem.forEach(body => {
    // Create a new HTML element for each celestial body
    let bodyEl = document.createElement('section');

    // Find the corresponding SVG for the celestial body
    let svgObj = solarSystemSVGs[body.id];

    // Add the SVG to the new element
    bodyEl.innerHTML = `${svgObj.path}`;

    // Add a click event listener to each celestial body element
    bodyEl.addEventListener("click", () => {
      openOverlay(body);
    });

    // Append the new element to the document body
    document.body.appendChild(bodyEl);
  });
}

function openOverlay(body) {
  // Modify this function to display information about the clicked celestial body
  console.log("Clicked on:", body);
  // You can update this function to show a modal, update UI, etc.
}

function renderSolarSystemToUI() {
  // gå igenom alla himlakroppar i listan
  solarSystem.forEach(body => {
      // för varje himlakropp ska vi skapa ett nytt html-element åt den så vi kan se den!
      // nya elementet (som just nu bara finns i js)
      let bodyEl = document.createElement('section');
      // lägg in nya elementet i vår befintliga html
     
      // hitta tillhörande svg till himlakroppen
      let svgObj = solarSystemSVGs[body.id];
      // lägga in tillhörande svg i det nya elementet
      bodyEl.innerHTML = `${svgObj.path}`;
      // lägga på en eventlyssnare på varje himlakropps yttersta html-element
      bodyEl.addEventListener("click", () => {
          openOverlay(body);
      });
  });

};


 
  function displayPlanetInfo(planet) {
    // Open the modal or overlay
    const modal = document.querySelector(".modal");
    const modalContent = document.getElementById("modalContent");
  
    // Update the modal content with information about the clicked planet
    modalContent.textContent = `Planet Info:\nName: ${planet.name}\nDetails: ${planet.info}`;
  
    // Display the modal
    modal.style.display = "flex";
  }