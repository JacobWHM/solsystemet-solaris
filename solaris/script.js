
const modal = document.querySelector(".modal");
const overlay = document.querySelector("#overlay");
const API_URL = "https://majazocom.github.io/Data/solaris.json";
const SVGAPI_URL = "https://majazocom.github.io/Data/solarissvgs.json";


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


