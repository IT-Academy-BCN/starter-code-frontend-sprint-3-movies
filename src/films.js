// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  return array.map((f) => f.director);
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter((f) => f.director == director);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverage(array) {
  let avg,
    noCount = 0;
  if (array.length != 0) {
    avg =
      array.reduce((prev, curr) => {
        if (curr.score) {
          return prev + curr.score;
        } else {
          noCount++;
          return prev;
        }
      }, 0) /
      (array.length - noCount);
  }
  return parseFloat(avg.toFixed(2));
}

function moviesAverageOfDirector(array, director) {
  let arrayDir = getMoviesFromDirector(array, director);
  return moviesAverage(arrayDir);
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  return array
    .map((m) => m.title)
    .sort((a, b) => (a > b ? 1 : -1))
    .slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  return [...array].sort((a, b) =>
    a.year > b.year ? 1 : a.year == b.year ? (a.title > b.title ? 1 : -1) : -1
  );
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const movCat = array.filter((movie) => movie.genre.includes(category));
  return moviesAverage(movCat);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  return array.map(
    (e) =>
      (e = {
        ...e,
        duration:
          e.duration.match(/\d+min/g) != null
            ? parseInt(e.duration.match(/\d+/g)[0]) * 60 +
              parseInt(e.duration.match(/\d+/g)[1]) * 1
            : parseInt(e.duration.match(/\d+/g)[0]) * 60
      })
  );
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  return array
    .filter((m) => m.year === year)
    .sort((a, b) => b.score - a.score)
    .slice(0, 1);
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
