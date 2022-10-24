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
  
// Utility function
function getAllTitles(array) {
  let titles = array.map((movie) => movie.title);
  return titles;
}

function orderAlphabetically(array) {
  let titles = getAllTitles(array);
  let sortedTitles = titles.sort();
  let trimmedTitles = sortedTitles.slice(0, 20);
  return trimmedTitles;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const arrayCopy = [...array];
  const orderedMovies = arrayCopy.sort((a, b) => a.year - b.year);
  const orderedAlsoByAlph = orderedMovies.sort((a, b) => {
    if (a.year === b.year) {
      // Added the following line in case there are two homonymous films from the same year
      if (a.title === b.title) return 0;
      return a.title < b.title ? -1 : 1;
    }
  });
  return orderedAlsoByAlph;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const moviesByCategory = array.filter((movie) =>
    movie.genre.includes(category)
  );
  const average = moviesAverage(moviesByCategory);
  return average;
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
