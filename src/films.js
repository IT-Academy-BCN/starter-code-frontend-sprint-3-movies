// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director == director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let movies = getMoviesFromDirector(array, director);
  let result = moviesAverage(movies);
  return result;
}

function moviesAverage(array){
  let scores = array.map(m => m.score);
  let result = scores.reduce((prevValue, currentValue) => (prevValue + currentValue)) / scores.length;
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let titles = array.map(m => m.title);
  titles.sort();
  return titles.slice(0,20); 
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let orderedMovies = [...array];
  
  orderedMovies.sort((a,b) => {
    if(a.year > b.year){
      return 1;
    }
    else if (a.year < b.year) {
      return -1;
    }
    else { // in case of same year, order alphabetically by title
      if(a.title > b.title){
        return 1;
      }
      else if(a.title < b.title){
        return -1;
      }
      else {
        return 0;
      }
    }
  });

  return orderedMovies;
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
