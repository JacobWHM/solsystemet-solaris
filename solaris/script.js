
const modal = document.querySelector(".modal");
const overlay = document.querySelector("#overlay");
const API_URL = "https://majazocom.github.io/Data/solaris.json";
const SVGAPI_URL = "https://majazocom.github.io/Data/solarissvgs.json";


// html-elementet där vårt solsystem ska ligga
const solarSystemContainer = document.querySelector(".flex-container");


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

fetchPlanets();


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

    // Use a function to create a new scope and capture the current value of planet
    button.addEventListener('click', (function (currentPlanet) {
      return function () {
        displayPlanetInfo(currentPlanet);
      };
    })(planet));

    listItem.textContent = planet.name;
    listItem.appendChild(button);
    planetList.appendChild(listItem);
   
    const planet_element = document.getElementById("planet"+planet.id);
    if(planet_element){
        planet_element.addEventListener('click', (function (currentPlanet) {
            return function () {
              displayPlanetInfo(currentPlanet);
              openPopup();
            };
          })(planet));
    
    }
    
    
 
  });
}


   

// Separate function to display planet information
function displayPlanetInfo(planet) {

  // Modify this function to display information about the clicked planet
  console.log("Planet Info:", planet);
  // You can update this function to show a modal, update UI, etc.
}



function openPopup() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "block";
}

function closePopup() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

// Add click event listener to the trigger element (e.g., a button)
function displayPlanetInfo(planet) {
  const popupTitle = document.querySelector("#overlay h2");
  const popupContent = document.querySelector("#overlay p");

  // Set the title of the popup
  popupTitle.textContent = planet.name;

  // Create an unordered list to display information
  const infoList = document.createElement("ul");

  // Iterate over the properties of the planet object
  for (const key in planet) {
    if (planet.hasOwnProperty(key)) {
      const listItem = document.createElement("li");
      listItem.textContent = `${key}: ${planet[key]}`;
      infoList.appendChild(listItem);
    }
  }

  // Clear previous content and append the new information list
  popupContent.innerHTML = '';
  popupContent.appendChild(infoList);
}