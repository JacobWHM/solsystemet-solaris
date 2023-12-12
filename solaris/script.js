
const modal = document.querySelector(".modal");
const overlay = document.querySelector("#overlay");

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
    button.addEventListener("click", () => displayPlanets(planet));

    listItem.textContent = planet.name;
    listItem.appendChild(button);
    planetList.appendChild(listItem);
  });
}

function renderSolarSystemToUI() {
  solarSystem.forEach(planet => {
      let bodyEl = document.createElement('section');
      flex-container.appendChild(bodyEl);
      let svgObj = solarSystemSVGs[planet.id];
      bodyEl.innerHTML = `${svgObj.path}`;
      bodyEl.addEventListener("click", () => {
          openOverlay(planet);
      });
  });
};

function openOverlay(planet) {
  let svgObj = solarSystemSVGs[planet.id];
  let svgCode = svgObj.overlaypath;
  let overlayEl = document.querySelector(".solarsystem-overlay");
  overlayEl.style.display = "block";  
  overlayEl.innerHTML = planet;
  ${svgCode}
  <section class="${planet.name}">
      <h1>${planet.name}</h1>
      <h2>${planet.latinName}</h2>
      <section class="body-info-container">
          <p class="body-type">${body.type}</p>
      </section>
  </section>
  `;
  solarSystemContainer.style.display = "none";
  let closeBtn = document.createElement("button");
  closeBtn.innerHTML = "x";
  closeBtn.addEventListener("click", () => {
      overlayEl.style.display = "none";
      solarSystemContainer.style.display = "flex";
  });
  overlayEl.appendChild(closeBtn);
};

window.addEventListener("load", getSolarSystem);



