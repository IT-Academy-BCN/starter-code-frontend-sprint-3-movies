// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((item) => item.director);
  console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter((item) => item.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let sum = getMoviesFromDirector(array, director).reduce(
    (total, item) => total + item.score,
    0
  );

  return parseFloat(
    (sum / getMoviesFromDirector(array, director).length).toFixed(2)
  );
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  return array
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 20)
    .map((item) => item.title);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  return array.slice().sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
}

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
