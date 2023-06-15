// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map((element) => element.director);
  console.log('EXERCISE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter((element) => element.director === director);
  console.log('EXERCISE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const filteredArray = array.filter(
    (element) => element.director === director
  );
  const result =
    filteredArray.reduce((acum, element) => acum + element.score, 0) /
    filteredArray.length;
  console.log('EXERCISE 3 ->', result);
  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  const result = array.map((element) => element.title).sort();
  if (result.length > 20) {
    result.length = 20;
  }
  console.log('EXERCISE 4 ->', result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const result = array
    .map((element) => ({ ...element }))
    .sort((a, b) => {
      const equalYear = a.year - b.year;
      if (equalYear === 0)
        if (a.title < b.title) return -1;
        else return 1;
      else return equalYear;
    });
  console.log('EXERCISE 5 ->', result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const moviesCategory = array.filter(
    (element) =>
      element.genre.includes(category) && typeof element.score === 'number'
  );
  console.log(moviesCategory);

  const result =
    moviesCategory.reduce((acum, index) => acum + index.score, 0) /
    moviesCategory.length;

  console.log('EXERCISE 6 ->', result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const result = array.map((movie) => {
    let hours = 0;
    let minutes = 0;
    const hoursRegex = /(\d+)h/;
    const minutesRegex = /(\d+)min/;

    const hoursMatch = movie.duration.match(hoursRegex);
    if (hoursMatch) {
      hours = parseInt(hoursMatch[1]);
    }

    const minutesMatch = movie.duration.match(minutesRegex);
    if (minutesMatch) {
      minutes = parseInt(minutesMatch[1]);
    }

    const totalMinutes = hours * 60 + minutes;
    return {
      ...movie,
      duration: totalMinutes
    };
  });

  console.log('EXERCISE 7 ->', result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const result = [
    array.filter((movie) => movie.year === year).sort((a, b) => a.score + b.score)[0]];
  console.log('EXERCICE 8 ->', result);
  return result;
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
