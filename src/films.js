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

function filterMoviesWithoutScore(array) {
  return array.filter((movie) => movie.score != '');
}

function calculateAverageScore(array) {
  const moviesWithScore = filterMoviesWithoutScore(array);
  const moviesTotalScore = moviesWithScore.reduce(
    (acc, movie) => acc + movie.score,
    0
  );

  const moviesAverageScore = moviesTotalScore / moviesWithScore.length;
  return Number(moviesAverageScore.toFixed(2));
}

function moviesAverageOfDirector(array, director) {
  const moviesByDirector = getMoviesFromDirector(array, director);

  return calculateAverageScore(moviesByDirector);
}

console.log(
  'EX 3 (should show the average score of movies by Tarantino):',
  moviesAverageOfDirector(movies, 'Quentin Tarantino')
);

// Exercise 4:  Alphabetic order by title

/* function orderAlphabetically(array) {
  const movieTitles = array.map((movie) => movie.title);
  const movieTitlesSorted = movieTitles.sort();
  const top20MovieTitlesSorted = movieTitlesSorted.slice(0, 20);

  return top20MovieTitlesSorted;
} */

// Using method chaining
function orderAlphabetically(array) {
  return array
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
}

console.log(
  'EX 4 (should show an array of 20 movie titles ordered alphabetically):',
  orderAlphabetically(movies)
);

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const sortedMoviesByYear = [...array];

  return sortedMoviesByYear.sort((movie1, movie2) => {
    if (movie1.year < movie2.year) {
      return -1;
    } else if (movie1.year > movie2.year) {
      return 1;
    } else {
      // If the release years are the same, sort them alphabetically.
      // localeCompare compares two strings and returns a negative
      // or positive value depending on the result
      return movie1.title.localeCompare(movie2.title);
    }
  });
}

console.log(
  'EX 5 (should show an array of movies ordered by their release year, and alphabetically for those that share the same release year):',
  orderByYear(movies)
);

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const moviesByCategory = array.filter((movies) =>
    movies.genre.includes(category)
  );

  return calculateAverageScore(moviesByCategory);
}

console.log(
  'EX 6 (should show the average score of action movies):',
  moviesAverageByCategory(movies, 'Action')
);

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
