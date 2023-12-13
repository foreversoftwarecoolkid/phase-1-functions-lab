// Function 1: distanceFromHqInBlocks
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
  }
  
  // Function 2: distanceFromHqInFeet
  function distanceFromHqInFeet(blocks) {
    const blocksTravelled = distanceFromHqInBlocks(blocks);
    return blocksTravelled * 264; // 1 block = 264 feet
  }
  
  // Function 3: distanceTravelledInFeet
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(endBlock - startBlock);
    return blocksTravelled * 264; // 1 block = 264 feet
  }
  
  // Function 4: calculatesFarePrice
  function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distance <= 400) {
      return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate for distances over 2000 feet
    } else {
      return 'cannot travel that far'; // Cannot travel over 2500 feet
    }
  }
  
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice,
  };
  