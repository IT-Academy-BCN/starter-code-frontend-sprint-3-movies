const movies = require('./data');

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((item) => item.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let movie = array.filter((mov) => mov.director === director);
  return movie;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let scores = array.reduce(
    ({ count, sum }, person) => {
      return person.director === director
        ? { count: count + 1, sum: sum + parseFloat(person.score) }
        : { count, sum };
    },
    { count: 0, sum: 0 }
  );
  let avgScore = scores.sum / scores.count;
  return Math.round(avgScore * 1e2) / 1e2;
}
// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let newArray = array.flatMap((mov) => mov.title);
  newArray.sort((a, b) => (a > b ? 1 : -1));
  if (newArray.length > 20) newArray.length = 20;
  return newArray;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let newArray = array.flatMap((mov) => mov);
  newArray.sort((a, b) => (a.year > b.year ? 1 : -1));
  return newArray;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let scores = array.reduce(
    ({ count, sum }, mov) => {
      return mov.genre == genre
        ? {
            count: (mov.score = mov.score) ? count + 1 : count + 0,
            sum: sum + parseFloat((mov.score = mov.score || 0))
          }
        : { count, sum };
    },
    { count: 0, sum: 0 }
  );
  let avgScore = scores.sum / scores.count;
  return Math.round(avgScore * 1e2) / 1e2;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let newArray = array.map((mov) => {
    return { ...mov };
  });
  newArray.forEach((element) => {
    element.duration = element.duration.replace(/[^\d]/g, '');
    sumaH = parseInt(element.duration.charAt(0)) * 60;
    sumaM = parseInt(element.duration.charAt(1) + element.duration.charAt(2));
    total = sumaH + ((sumaM = sumaM) ? sumaM : 0);
    element.duration = total;
  });
  return newArray;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let newArray = array.map((mov) => {
    return { ...mov };
  });
  let bestMov = newArray.reduce((acc, value) => {
    return (acc = acc > value.score ? acc : value.score);
  }, 0); 
  let mov = newArray.filter((mov) => mov.score === bestMov);
  return mov;
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
