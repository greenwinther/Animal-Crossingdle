import { fetchContainer } from "./createContainer";

export const createFetchButton = (label: string, className: string) => {
  const button = document.createElement("button");
  button.textContent = label;
  button.classList.add(className);
  return button;
};

export const villagersButton = createFetchButton(
  "Load Villagers",
  "fetch-villagers-btn"
);
export const bugsButton = createFetchButton("Load Bugs", "fetch-bugs-btn");
export const fishButton = createFetchButton("Load Fish", "fetch-fish-btn");
fetchContainer.appendChild(villagersButton);
fetchContainer.appendChild(bugsButton);
fetchContainer.appendChild(fishButton);

/* Old functions
// Function to create a button for fetching villagers
export const createFetchVillagersButton = (appContainer: HTMLElement) => {
  const button = document.createElement("button");
  button.textContent = "Load Villagers";
  button.classList.add("fetch-villagers-btn");
  appContainer.appendChild(button);
  return button;
};

// Function to create a button for fetching bugs
export const createFetchBugsButton = (appContainer: HTMLElement) => {
  const button = document.createElement("button");
  button.textContent = "Load Bugs";
  button.classList.add("fetch-bugs-btn");
  appContainer.appendChild(button);
  return button;
};

// Function to create a button for fetching fish
export const createFetchFishButton = (appContainer: HTMLElement) => {
  const button = document.createElement("button");
  button.textContent = "Load Fish";
  button.classList.add("fetch-fish-btn");
  appContainer.appendChild(button);
  return button;
}; */
