// Simple example program to demonstrate inventory management

// Initialize the inventory with sample data
const candles = {
  aromatherapy: {
    chamomile: 6,
    lavender: 8,
    jasmine: 12,
    vanilla: 10,
  },
  decorative: {
    short: 5,
    medium: 10,
    long: 13,
  },
  soy: {
    mint: 6,
    cinnamon: 10,
    mahogan: 6,
  },
  birthday: {
    honey: 5,
    cherry: 6,
    strawberry: 8,
    // Add more types per category
  },
};
// Add more categories

function addPurchase(category, candle, quantity) {
  if (isNaN(quantity) || quantity <= 0) {
    console.log(
      "Invalid quantity. Please enter a valid number greater than 0."
    );
    return;
  }

  if (!candles[category]) {
    console.log(`${category} is not a valid candle category.`);
    return;
  }

  if (!candles[category][candle]) {
    console.log(
      `${candle} is not a valid candles in the ${category} category.`
    );
    return;
  }

  candles[category][candle] += quantity;
  console.log(
    `${quantity} ${candle} candles in the ${category} category added to the inventory.`
  );
}

// Function to subtract a sale from the inventory
function subtractSale(category, candle, quantity) {
  // Subtract the sale from the inventory
  if (candles[category] && candles[category][candle]) {
    if (candles[category][candle] < quantity) {
      console.log(
        `Not enough stock to subtract ${quantity} ${candle} candles from the ${category} category.`
      );
      return;
    }
    candles[category][candle] -= quantity;
    console.log(
      `Sale of ${quantity} ${candle} candles subtracted from the ${category} category.`
    );
  } else {
    console.log(`${candle} is not a valid candle in the ${category} category.`);
  }
}

// Function to get the total count of a candle across all categories
function getTotalCount(candle) {
  let totalCount = 0;
  for (let category in candles) {
    if (candles[category][candle]) {
      totalCount += candles[category][candle];
    }
  }
  if (totalCount === 0) {
    console.log(`${candle} not found in the inventory.`);
  }
  return totalCount;
}

// Function to check if stock has fallen below a threshold for a specific candle across all categories
function checkStockThreshold(candle, threshold) {
  let totalCount = getTotalCount(candle);
  if (totalCount < threshold) {
    return true;
  }
  return false;
}

// Example usage
addPurchase("aromatherapy", "vanilla", 5); // Adds 5 vanilla candles to the aromatherapy category
addPurchase("soy", "mint", 7);
subtractSale("soy", "mint", 3); // Subtracts 3 mint candles from the soy category
subtractSale("birthday", "honey", 3);
subtractSale("aromatherapy", "vanilla", 12); // test for restock

// Usage of getTotalCount
console.log(`Total vanilla candles: ${getTotalCount("vanilla")}`); // Output will be the total count of vanilla candles across all categories
console.log(`Total long candles: ${getTotalCount("long")}`); // Output will be the total count of vanilla candles across all categories
console.log(`Total honey candles: ${getTotalCount("honey")}`); // Output will be the total count of vanilla candles across all categories

// Usage of alertRestockThreshold
alertRestockThreshold("vanilla", 5); // If stock of vanilla across all categories falls below 5, it alerts to restock

// Restock alert function
function alertRestockThreshold(candle, threshold) {
  if (checkStockThreshold(candle, threshold)) {
    console.log(
      `LOW STOCK: ${candle} stock has fallen below ${threshold}. Please restock!`
    );
  }
}
