const gridContainer = document.querySelector(".grid-container");
const button1 = document.querySelector("#new-grid");
const clearButton = document.querySelector("#clear");
let nGrid;

function generateGrid(n) {
  gridContainer.innerHTML = "";
  nGrid = n;

  gridContainer.style.setProperty("--n", n);

  for (let i = 0; i < n * n; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    let hoverCounter = 1;
    gridItem.addEventListener("mouseenter", () => {
      console.log(gridItem.style.backgroundColor);
      hoverCounter = darkenCell(gridItem, hoverCounter);
    });
    gridContainer.appendChild(gridItem);
  }
}

function darkenCell(gridItem, counter) {
  gridItem.style.backgroundColor = "black";
  let opacity = 0.1 * counter;
  gridItem.style.opacity = `${opacity}`;
  return counter + 1;
}

button1.addEventListener("click", () => {
  const userInput = prompt("Enter a number (max 100):");
  const number = parseInt(userInput);

  if (isNaN(number) || number < 0 || number > 100) {
    alert("Invalid input. Please enter a number between 0 and 100.");
  }
  generateGrid(number);
});

clearButton.addEventListener("click", () => generateGrid(nGrid));

generateGrid(16);
