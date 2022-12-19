const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(item => item.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let dir = director;
  let movie = array.filter(mov => mov.director === dir);
  return movie;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let scores = array.reduce(({count, sum}, person)=>{
    return (person.director === director)
      ? {count: count+1, sum: sum + parseFloat(person.score)}
      : {count, sum};
  }, {count:0, sum:0})
  let avgScore = scores.sum / scores.count;
  return Math.round( avgScore * 1e2 ) / 1e2;
}
// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  console.log('wtf '+ array);
  array.sort((a,b) => (a.title > b.title ? 1 : -1));
  console.log('mec6 : '+array);
  return alpha;
}

// Exercise 5: Order by year, ascending
function orderByYear() {

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
