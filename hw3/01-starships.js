// Note: Your JavaScript code should be inside of functions

//Form Function
document.getElementById("submitButton").addEventListener("click", (event) => {
  event.preventDefault();
  // Gather Values
  const name = document.getElementById("Name").value;
  const username = document.getElementById("Username").value;
  const email = document.getElementById("Email").value;
  const password = document.getElementById("Password").value;
  const date = document.getElementById("Date").value;

  // Get pronouns
  const pronouns =
    document.querySelector('input[name="pronouns"]:checked')?.value ||
    "Not specified";

  // Error handling
  if (!name || !username || !email || !password || !date) {
    console.warn("Form submission error: Please fill out all fields.");
    alert("Please fill out all fields before submitting");
    return;
  }
  if (!email.includes("@")) {
    alert("Invalid email! Please include an '@' in the email address.");
    return;
  }
  // Log the collected data
  console.log("Form Submitted Successfully!");
  console.table({
    Name: name,
    Username: username,
    Email: email,
    Password: password,
    Date: date,
    Pronouns: pronouns,
  });

  document.getElementById("signupForm").reset();
});

const fetchData = async (url) => {
  // Retrieve the data from the API
  try {
    const response = await fetch(url);
    const data = await response.json();
    createSpaceshipComponent(data.results);
  } catch (error) {
    console.error(error);
  }
};

// Use this function to create the individual spaceship component
const createSpaceshipComponent = (starships) => {
  const starshipsSection = document.getElementById("starships");

  starships.forEach((ship) => {
    const shipcard = document.createElement("div");
    shipcard.className = "card mx-auto my-4 ";
    shipcard.innerHTML = `
    <div class="card-body">
        <p class="card-title d-flex justify-content-between fw-bold">
            <span>${ship.name}</span>
            <span>${Number(
              ship.cost_in_credits
            ).toLocaleString()} credits</span>
        </p>
        <p class="card-text">Manufactured by ${ship.manufacturer}</p>

        <div class="d-flex justify-content-between align-items-center">
            <div class="text-center w-50">
                <p class="fw-bold">${Number(
                  ship.max_atmosphering_speed
                ).toLocaleString()}</p>
                <p class="card-text">Max Atmosphering Speed</p>
            </div>
            <div class="vr mx-3"></div> <!-- Vertical line -->
            <div class="text-center w-50">
                <p class="fw-bold">${Number(
                  ship.cargo_capacity
                ).toLocaleString()}</p>
                <p class="card-text">Cargo Capacity</p>
            </div>
        </div>
    </div>
`;

    starshipsSection.appendChild(shipcard);
  });
};

fetchData("https://swapi.dev/api/starships/");
