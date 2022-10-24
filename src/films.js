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
function convertHoursToMinutes(string) {
  // Remove ending only if string format is "xh yymin", not if it is "xh" or "xxh"
  if (string.length <= 3) {
    strResult = string.slice(0, -1);
    strToMinute = parseInt(strResult) * 60;
    return strToMinute;
  } else {
    const strRemovedEnding = string.slice(0, -3);
    const strSplitted = strRemovedEnding.split('h ');
    strSplitted[0] = strSplitted[0] * 60;
    const strSum = parseInt(strSplitted[0]) + parseInt(strSplitted[1]);
    return strSum;
  }
}

function hoursToMinutes(array) {
  const arrayDeepCopy = JSON.parse(JSON.stringify(array));
  arrayDeepCopy.forEach((movie) => {
    movie.duration = convertHoursToMinutes(movie.duration);
  });
  return arrayDeepCopy;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const arrayCopy = [...array];
  const moviesOfYear = arrayCopy.filter((movie) => movie.year === year);
  const bestFilmOfYear = moviesOfYear.reduce((best, current) =>
    best.score >= current.score ? best : current
  );
  const highestScoreOfYear = bestFilmOfYear.score;
  const bestMovieOfYear = moviesOfYear.filter(
    (movie) => movie.score === highestScoreOfYear
  );
  return bestMovieOfYear;
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
    bestFilmOfYear
  };
}
