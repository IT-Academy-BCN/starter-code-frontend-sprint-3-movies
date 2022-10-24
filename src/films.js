// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((el) => el.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((el) => el.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.

// Utility function
function moviesAverage(array) {
  let scores = array.map((movie) => movie.score);
  let sum = scores.reduce((accumulator, previous) => accumulator + previous);
  // To account for exercise 6: non-scored films should not lower average
  let amountOfScoredMovies = scores.filter((n) => n).length;
  let average = parseFloat((sum / amountOfScoredMovies).toFixed(2));
  return average;
}

function moviesAverageOfDirector(array, director) {
  let movies = getMoviesFromDirector(array, director);
  let average = moviesAverage(movies);
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
