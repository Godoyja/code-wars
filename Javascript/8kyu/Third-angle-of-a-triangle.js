// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// MY SOLUTION

function otherAngle(a, b) {
    let thirdAngle = 180 - (a + b) ;
    return (thirdAngle) ;
  }