const movies = require('../src/data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  return array.map((movie) => movie.director);
}

console.log(
  'EX 1 (should show an array of all directors):',
  getAllDirectors(movies)
);

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter((movie) => movie.director === director);
}

console.log(
  'EX 2 (should show an array of movies by Tarantino):',
  getMoviesFromDirector(movies, 'Quentin Tarantino')
);

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesByDirector = getMoviesFromDirector(array, director);
  const moviesByDirectorScore = moviesByDirector.map((movie) => movie.score);
  const moviesByDirectorScoreSum = moviesByDirectorScore.reduce(
    (acc, score) => acc + score,
    0
  );
  const moviesByDirectorScoreAverage =
    moviesByDirectorScoreSum / moviesByDirector.length;

  return Number(moviesByDirectorScoreAverage.toFixed(2));
}

console.log(
  'EX 3 (should show the average score of movies by Tarantino):',
  moviesAverageOfDirector(movies, 'Quentin Tarantino')
);

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {}

// Exercise 5: Order by year, ascending
function orderByYear() {}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

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
