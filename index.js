// Each logical part of the function moved to separate inner function for readability
function sudoku(puzzle) {
    
  while(mapEachZero(findNumber));
  
  return puzzle;
  
  // does logic with each zero (unknown number) in the puzzle
  function mapEachZero(func) {
    let hasZeros = false;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (!puzzle[i][j]) {
          hasZeros = true;
          puzzle[i][j] = func(i, j);
        }
      }
    }
    return hasZeros;
  }
  
  // finds (if possible) the solution for given [i,j] slot of the puzzle
  function findNumber(i, j) {
    let possibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    possibles = possibles.filter(p => !hasInLine(i, j, p) &&
                                      !hasInColumn(i, j, p) &&
                                      !hasInSquare(i, j, p));
    
    if (possibles.length === 1)
      return possibles[0];
    else
      return 0;
  }
  
  // checks if given number is present in the i line
  function hasInLine(i, j, number) {
    for (let j = 0; j < 9; j++) {
      if (puzzle[i][j] === number)
        return true;
    }
    return false;
  }
  
  // checks if given number is present in the j column
  function hasInColumn(i, j, number) {
    for (let i = 0; i < 9; i++) {
      if (puzzle[i][j] === number)
        return true;
    }
    return false;
  }
  
  // checks if given number is present in a 3x3 square of given [i,j] slot of the puzzle
  function hasInSquare(i, j, number) {
    const INTERVALS = [[0,3],[3,6],[6,9]],
          iInter = INTERVALS.find(arr => i >= arr[0] && i < arr[1]),
          jInter = INTERVALS.find(arr => j >= arr[0] && j < arr[1]);
    
    for (let i = iInter[0]; i < iInter[1]; i++) {
      for (let j = jInter[0]; j < jInter[1]; j++) {
        if (puzzle[i][j] === number)
          return true;
      }
    }
    return false;
  }
}
