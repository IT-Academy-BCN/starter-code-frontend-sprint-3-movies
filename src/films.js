// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(a => a.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(a => a.director === director);
  let moviesArray = [];
  result.forEach(function(movie) {moviesArray.push(movie)});
  console.log('Exercice 2 ->', moviesArray);
  return moviesArray;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(director) {
  let moviesArray = getMoviesFromDirector(director);
  let total = 0, average;
  moviesArray.forEach(function(movie) {total += movie.score});
  average = (total/moviesArray.length).toFixed(2);
  console.log('Exercice 3 ->', average);
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
