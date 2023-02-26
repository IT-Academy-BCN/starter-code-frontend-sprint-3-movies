const movies = require('../src/data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  return movies.map((movie) => movie.director);
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  return movies.filter((movie) => movie.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.
function calculateAverageScore(movies) {
  const moviesWithScore = movies.filter((movie) => movie.score != '');
  const moviesTotalScore = moviesWithScore.reduce(
    (acc, movie) => acc + movie.score,
    0
  );
  const moviesAverageScore = moviesTotalScore / moviesWithScore.length;

  return Number(moviesAverageScore.toFixed(2));
}

function moviesAverageOfDirector(movies, director) {
  const moviesByDirector = getMoviesFromDirector(movies, director);

  return calculateAverageScore(moviesByDirector);
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(movies) {
  return movies
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const sortedMoviesByYear = [...movies];

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

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  const moviesByCategory = movies.filter((movies) =>
    movies.genre.includes(category)
  );

  return calculateAverageScore(moviesByCategory);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  const moviesCopy = [...movies];

  return moviesCopy.map((movie) => {
    // Divide the movie.duration string by the space between the hours and minutes
    const movieHours = parseInt(movie.duration.split(' ')[0]);
    // Assign 0 minutes if the string has no minutes
    const movieMinutes = parseInt(movie.duration.split(' ')[1]) || 0;

    return {
      ...movie,
      duration: movieHours * 60 + movieMinutes
    };
  });
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const filmsOfYear = movies.filter((movie) => movie.year === year);
  const bestMovie = filmsOfYear.reduce((bestMovie, currMovie) =>
    bestMovie.score > currMovie.score ? bestMovie : currMovie
  );

  return [bestMovie];
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
