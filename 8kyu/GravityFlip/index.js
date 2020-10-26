// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

// Examples:

// flip('R', [3, 2, 1, 2])     =>  [1, 2, 2, 3]
// flip('L', [1, 4, 5, 3, 5])  =>  [5, 5, 4, 3, 1]

const flip = (d, a) => {
  if (d === "R") {
    return a.sort(function (a, b) {
      return a - b;
    });
  } else
    return a.sort(function (a, b) {
      return b - a;
    });
};
