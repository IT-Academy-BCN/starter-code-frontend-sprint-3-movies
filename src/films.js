// import { movies } from "./data";

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  const directors = array.map( function(item) {
    return item.director;
  })
  
  console.log("EXERCICE 1 ->", directors);
  return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {

  const directorMovies = array.filter(function(item) {
          return director === item.director;
    });
  directorMovies.map(function(item) {
      return item.title;
    })

  console.log("EXERCICE 2 ->", directorMovies);
  return directorMovies;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {

  const directorMovies = array.filter(function(item) {
    return director === item.director;
  });
  const valor = 0;
  const sumaScores = directorMovies.reduce(function(sumaTotal, item){
    return sumaTotal + item.score; 
  }, valor)

  const total = parseFloat((sumaScores / directorMovies.length).toFixed(2));

  console.log("EXERCICE 3 ->", total); 
  return total;
//Para el valor medio
//  Sum all the values of the array.
// Divide the sum by the length of the array.
// add all the scores from the movies from the same director and divide them from the array.length
 

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  // should only return the title of the movies, each value should be a string
  // should return all of items when the array passed has 𝗳𝗲𝘄𝗲𝗿 than 20 items
  // should order them alphabetically.
  const firstMovies = array.slice(0, 20);
  firstMovies.sort()
  console.log(firstMovies);
  return firstMovies
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
