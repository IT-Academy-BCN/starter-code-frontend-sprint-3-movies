// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  let result =  array.map(element => element.director);

  console.log("EXERCISE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  let result = array.filter(element => element.director === director);

  console.log("EXERCISE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  
  /* const result = array.filter(element => element.director === director);
  const scores = result.map(element => element.score);
  const average = scores.reduce((totalScore, element) => totalScore + element);
  const numberMovies = result.length;
  const scoreAverage = Number((average / numberMovies).toFixed(2)); */

  // Resumit en una línia
  const result = Number((array.filter(element => element.director === director).map(element => element.score).reduce((totalScore, element) => totalScore + element, 0) / array.filter(element => element.director === director).length).toFixed(2));
  
  console.log("EXERCISE 3 ->", result);
  return result;
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
