
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
  // gå igenom alla himlakroppar i listan
  solarSystem.forEach(planet => {
      // för varje himlakropp ska vi skapa ett nytt html-element åt den så vi kan se den!
      // nya elementet (som just nu bara finns i js)
      let bodyEl = document.createElement('section');
      // lägg in nya elementet i vår befintliga html
      flex-container.appendChild(bodyEl);
      // hitta tillhörande svg till himlakroppen
      let svgObj = solarSystemSVGs[planet.id];
      // lägga in tillhörande svg i det nya elementet
      bodyEl.innerHTML = `${svgObj.path}`;
      // lägga på en eventlyssnare på varje himlakropps yttersta html-element
      bodyEl.addEventListener("click", () => {
          openOverlay(planet);
      });
  });
};

function openOverlay(planet) {
  // ta fram planetens svg-objekt i listan över svg:er
  let svgObj = solarSystemSVGs[planet.id];
  // ta fram enbart svg-koden för overlay till planeten
  let svgCode = svgObj.overlaypath;
  // få tag på overlay-elementeti UI't
  let overlayEl = document.querySelector(".solarsystem-overlay");
  // visa vår overlay mha display-propertyn i css
  overlayEl.style.display = "block";
  // lägga in svg:n i overlayen
  overlayEl.innerHTML = `
  
  ${svgCode}
  <section class="${planet.name}">
      <h1>${planet.name}</h1>
      <h2>${planet.latinName}</h2>
      <section class="body-info-container">
          <p class="body-type">${body.type}</p>
      </section>
  </section>
  
  `;
  // dölja main-vyn
  solarSystemContainer.style.display = "none";
  // skapa knapp-element
  let closeBtn = document.createElement("button");
  closeBtn.innerHTML = "x";
  closeBtn.addEventListener("click", () => {
      // dölja overlay
      overlayEl.style.display = "none";
      // visa main-vyn
      solarSystemContainer.style.display = "flex";
  });
  overlayEl.appendChild(closeBtn);
};

window.addEventListener("load", getSolarSystem);



