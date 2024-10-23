// Array of random names
const names = [
  "James Tamayo",
  "Daniela Pedres",
  "Abbigail Jaspi",
];

const wish = [
  "Wish: Good health",
  "Wish: Penge handa",
  "Wish: Best wishes",
];

// Get reference to the name display element
const nameDisplay = document.getElementById('nameDisplay');
const wishDisplay = document.getElementById('wishDisplay');

// Function to generate a random name
function generateRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  const randomName = names[randomIndex];
  nameDisplay.textContent = randomName;
}

// Function to generate a random wish
function generateRandomWish() {
  const randomIndex = Math.floor(Math.random() * wish.length);
  const randomWish = wish[randomIndex];  // Corrected variable name
  wishDisplay.textContent = randomWish;  // Corrected variable name
}

// Automatically swap names and wishes every 3 seconds (3000 milliseconds)
setInterval(generateRandomName, 3000);
setInterval(generateRandomWish, 1000);

// Initial name and wish display
generateRandomName();
generateRandomWish();
