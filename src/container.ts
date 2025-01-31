// Creates the main container for the villagers
export const createVillagersContainer = (): HTMLDivElement => {
  const container = document.createElement("div");
  container.className = "villagers-grid";
  return container;
};

// Creates the main container for bugs
export const createBugsContainer = (): HTMLDivElement => {
  const container = document.createElement("div");
  container.className = "bugs-grid"; // Unique class for styling
  return container;
};

// Creates the main container for fish
export const createFishContainer = (): HTMLDivElement => {
  const container = document.createElement("div");
  container.className = "fish-grid"; // Unique class for styling
  return container;
};
