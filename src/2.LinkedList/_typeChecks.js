const isNum = num => typeof num === "number";

const isNumArray = function(nums) {
  if (!Array.isArray(nums)) return false;
  return nums.every(num => typeof num === "number");
};

exports.isDataValid = function(data) {
  if (isNum(data)) return "number";
  else if (isNumArray(data)) return "numberArray";
  else {
    throw TypeError("Expected data to be a number or Array of numbers");
  }
};
