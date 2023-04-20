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
  console.log(sumaScores);
  const total = parseFloat((sumaScores / directorMovies.length).toFixed(2));

  console.log("EXERCICE 3 ->", total); 
  return total;

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  const movieTitle = array.map(function(movie){
    return movie.title;
  }).sort().slice(0, 20);

  console.log("EXERCICE 4 ->", movieTitle);

  return movieTitle;

  // const movieTitle = array.map(function(item) {
  //   return item.title;
  // }).sort();
  // movieTitle.slice(0, 20);
  // console.log("EXERCICE 4 ->", movieTitle);
  // return movieTitle;


}

// Exercise 5: Order by year, ascending
function orderByYear(arr) {
  
  const moviesByYear = arr.map( year => year.year)



  console.log("EXERCICE 5 ->", moviesByYear);
  //should return the element in a single element array
  //should return the new array in ascending order

  return moviesByYear;
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
