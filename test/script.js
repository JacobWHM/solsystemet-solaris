document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const overlay = document.getElementById("overlay");
    const API_URL = "https://majazocom.github.io/Data/solaris.json";

    // html-elementet där vårt solsystem ska ligga
    const solarSystemContainer = document.querySelector(".solarsystem-container");

    // get data
    const fetchData = async () => {
        try {
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log(data);

            // Call the function to display planets after fetching data
            displayPlanets(data);
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }
    };

    fetchData();

    // get the information about the planets
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
        // Update this function to show a modal, update UI, etc.
        showModal(planet);
    }

    // Function to show the modal with planet information
    function showModal(planet) {
        modal.innerHTML = `<h2>${planet.name}</h2><p>Planet details go here.</p>`;
        modal.style.display = "block";
        overlay.style.display = "block";
    }

    // Close modal when overlay is clicked
    overlay.addEventListener("click", () => {
        modal.style.display = "none";
        overlay.style.display = "none";
    });
});
