// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result =  array.map( (film) => film.director );
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const moviesDirector = array.filter( (film) => film.director === director );
  console.log("EXERCICE 2 ->", moviesDirector);
  return moviesDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesDirector = array.filter( (film) => film.director === director );
  const average = moviesDirector.reduce((sum, film) => sum + film.score, 0) / moviesDirector.length;
  console.log("EXERCICE 3 ->", Number(average.toFixed(2)));
  return Number(average.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const title20Films = [...array]
  .map(film => film.title)
  .sort()
  .slice(0, 20);
  return title20Films;
}

// Exercise 5: Order by year, ascending
function orderByYear() {
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

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
